import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Edit, Trash2, Save, X, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { insertBlogPostSchema, insertPageContentSchema, type BlogPost, type InsertBlogPost, type PageContent, type InsertPageContent, COUNTRY_NAMES, type Country, type PageType, pageTypeSchema } from "@shared/schema";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAllPageContent, useCreatePageContent, useUpdatePageContent, useDeletePageContent } from "@/hooks/use-page-content";

const countries: Country[] = ["rs", "mk", "me", "ba"];

export function AdminPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreatePageDialogOpen, setIsCreatePageDialogOpen] = useState(false);
  const [editingPageContent, setEditingPageContent] = useState<PageContent | null>(null);
  const { toast } = useToast();

  const { data: posts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/admin/blog/posts"],
  });

  const { data: pageContents = [], isLoading: isLoadingPages } = useAllPageContent();

  const createPostMutation = useMutation({
    mutationFn: (data: InsertBlogPost) => 
      apiRequest("POST", "/api/admin/blog/posts", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog/posts"] });
      setIsCreateDialogOpen(false);
      toast({ title: "Blog post created successfully" });
    },
    onError: () => {
      toast({ title: "Failed to create blog post", variant: "destructive" });
    },
  });

  const updatePostMutation = useMutation({
    mutationFn: ({ slug, data }: { slug: string; data: InsertBlogPost }) =>
      apiRequest("PUT", `/api/admin/blog/posts/${slug}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog/posts"] });
      setEditingPost(null);
      toast({ title: "Blog post updated successfully" });
    },
    onError: () => {
      toast({ title: "Failed to update blog post", variant: "destructive" });
    },
  });

  const deletePostMutation = useMutation({
    mutationFn: (slug: string) =>
      apiRequest("DELETE", `/api/admin/blog/posts/${slug}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog/posts"] });
      toast({ title: "Blog post deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete blog post", variant: "destructive" });
    },
  });

  const handleDeletePost = (slug: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      deletePostMutation.mutate(slug);
    }
  };

  // Page content mutations
  const createPageMutation = useCreatePageContent();
  const updatePageMutation = useUpdatePageContent();
  const deletePageMutation = useDeletePageContent();

  const handleCreatePage = (data: InsertPageContent) => {
    createPageMutation.mutate(data, {
      onSuccess: () => {
        setIsCreatePageDialogOpen(false);
        toast({ title: "Page content created successfully" });
      },
      onError: () => {
        toast({ title: "Failed to create page content", variant: "destructive" });
      }
    });
  };

  const handleUpdatePage = (country: Country, pageType: PageType, data: InsertPageContent) => {
    updatePageMutation.mutate({ country, pageType, data }, {
      onSuccess: () => {
        setEditingPageContent(null);
        toast({ title: "Page content updated successfully" });
      },
      onError: () => {
        toast({ title: "Failed to update page content", variant: "destructive" });
      }
    });
  };

  const handleDeletePage = (country: Country, pageType: PageType) => {
    if (confirm("Are you sure you want to delete this page content?")) {
      deletePageMutation.mutate({ country, pageType }, {
        onSuccess: () => {
          toast({ title: "Page content deleted successfully" });
        },
        onError: () => {
          toast({ title: "Failed to delete page content", variant: "destructive" });
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
          <p className="text-muted-foreground">Manage blog posts and page content</p>
        </div>

        <Tabs defaultValue="blog-posts" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="blog-posts">Blog Posts</TabsTrigger>
            <TabsTrigger value="page-content">Page Content</TabsTrigger>
          </TabsList>
          
          <TabsContent value="blog-posts" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Blog Posts</h2>
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button data-testid="button-create-post">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Create New Blog Post</DialogTitle>
                    <DialogDescription>
                      Fill in the details to create a new blog post
                    </DialogDescription>
                  </DialogHeader>
                  <BlogPostForm
                    onSubmit={(data) => createPostMutation.mutate(data)}
                    isPending={createPostMutation.isPending}
                    onCancel={() => setIsCreateDialogOpen(false)}
                  />
                </DialogContent>
              </Dialog>
            </div>

        {isLoading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-muted rounded w-1/3 mb-2" />
                  <div className="h-3 bg-muted rounded w-2/3 mb-4" />
                  <div className="flex gap-2">
                    <div className="h-6 bg-muted rounded w-16" />
                    <div className="h-6 bg-muted rounded w-16" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="relative">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {post.excerpt}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingPost(post)}
                        data-testid={`button-edit-${post.slug}`}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeletePost(post.slug)}
                        data-testid={`button-delete-${post.slug}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" data-testid={`badge-category-${post.slug}`}>
                      {post.category}
                    </Badge>
                    {post.featured && (
                      <Badge variant="default" data-testid={`badge-featured-${post.slug}`}>
                        Featured
                      </Badge>
                    )}
                    {!post.published && (
                      <Badge variant="destructive" data-testid={`badge-draft-${post.slug}`}>
                        Draft
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-sm text-muted-foreground">Countries:</span>
                    {post.countries.map((country) => (
                      <Badge key={country} variant="outline" data-testid={`badge-country-${country}-${post.slug}`}>
                        {COUNTRY_NAMES[country as Country]}
                      </Badge>
                    ))}
                  </div>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-muted-foreground">Tags:</span>
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" data-testid={`badge-tag-${tag}-${post.slug}`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {editingPost && (
          <Dialog open={!!editingPost} onOpenChange={() => setEditingPost(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Edit Blog Post</DialogTitle>
                <DialogDescription>
                  Update the blog post details
                </DialogDescription>
              </DialogHeader>
              <BlogPostForm
                defaultValues={editingPost}
                onSubmit={(data) => updatePostMutation.mutate({ slug: editingPost.slug, data })}
                isPending={updatePostMutation.isPending}
                onCancel={() => setEditingPost(null)}
              />
            </DialogContent>
          </Dialog>
        )}
          </TabsContent>
          
          <TabsContent value="page-content" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Page Content</h2>
              <Button data-testid="button-create-page">
                <Plus className="w-4 h-4 mr-2" />
                Create Page Content
              </Button>
            </div>
            
            <div className="text-center py-8">
              <p className="text-muted-foreground">Page content management coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

interface BlogPostFormProps {
  defaultValues?: BlogPost;
  onSubmit: (data: InsertBlogPost) => void;
  isPending: boolean;
  onCancel: () => void;
}

function BlogPostForm({ defaultValues, onSubmit, isPending, onCancel }: BlogPostFormProps) {
  const form = useForm<InsertBlogPost>({
    resolver: zodResolver(insertBlogPostSchema),
    defaultValues: defaultValues ? {
      title: defaultValues.title,
      slug: defaultValues.slug,
      excerpt: defaultValues.excerpt,
      content: defaultValues.content,
      imageUrl: defaultValues.imageUrl,
      category: defaultValues.category,
      tags: defaultValues.tags || [],
      countries: defaultValues.countries as Country[] || ["rs"],
      featured: defaultValues.featured || false,
      published: defaultValues.published !== undefined ? defaultValues.published : true,
    } : {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      imageUrl: "",
      category: "",
      tags: [],
      countries: ["rs"],
      featured: false,
      published: true,
    },
  });

  const handleSubmit = (data: InsertBlogPost) => {
    // Convert tags string to array if needed
    let tagsArray: string[] = [];
    
    if (Array.isArray(data.tags)) {
      tagsArray = data.tags;
    } else if (data.tags) {
      const tagsString = String(data.tags);
      tagsArray = tagsString.split(',').map((tag: string) => tag.trim()).filter(Boolean);
    }
      
    const processedData = {
      ...data,
      tags: tagsArray,
    };
    onSubmit(processedData);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    data-testid="input-title"
                    onChange={(e) => {
                      field.onChange(e);
                      if (!defaultValues) {
                        form.setValue("slug", generateSlug(e.target.value));
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input {...field} data-testid="input-slug" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input {...field} data-testid="input-category" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input {...field} data-testid="input-image-url" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="excerpt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Excerpt</FormLabel>
              <FormControl>
                <Textarea {...field} rows={3} data-testid="input-excerpt" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea {...field} rows={8} data-testid="input-content" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags (comma-separated)</FormLabel>
              <FormControl>
                <Input 
                  value={Array.isArray(field.value) ? field.value.join(', ') : String(field.value || '')}
                  onChange={(e) => field.onChange(e.target.value)}
                  data-testid="input-tags"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="countries"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Countries</FormLabel>
              <div className="space-y-2">
                {countries.map((country) => (
                  <div key={country} className="flex items-center space-x-2">
                    <Checkbox
                      id={country}
                      checked={field.value.includes(country)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          field.onChange([...field.value, country]);
                        } else {
                          field.onChange(field.value.filter((c) => c !== country));
                        }
                      }}
                      data-testid={`checkbox-country-${country}`}
                    />
                    <label htmlFor={country} className="text-sm">
                      {COUNTRY_NAMES[country]}
                    </label>
                  </div>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-4">
          <FormField
            control={form.control}
            name="featured"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormControl>
                  <Switch
                    checked={field.value || false}
                    onCheckedChange={field.onChange}
                    data-testid="switch-featured"
                  />
                </FormControl>
                <FormLabel>Featured</FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="published"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormControl>
                  <Switch
                    checked={field.value || false}
                    onCheckedChange={field.onChange}
                    data-testid="switch-published"
                  />
                </FormControl>
                <FormLabel>Published</FormLabel>
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            data-testid="button-cancel"
          >
            <X className="w-4 h-4 mr-2" />
            Cancel
          </Button>
          <Button type="submit" disabled={isPending} data-testid="button-save">
            <Save className="w-4 h-4 mr-2" />
            {isPending ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </Form>
  );
}