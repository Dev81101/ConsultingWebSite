import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Edit, Trash2, Save, X, Eye, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { insertBlogPostSchema, insertPageContentSchema, type BlogPost, type InsertBlogPost, type PageContent, type InsertPageContent, COUNTRY_NAMES, type Country, type PageType, pageTypeSchema, COUNTRY_LANGUAGES, LANGUAGE_NAMES, type Language } from "@shared/schema";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAllPageContent, useCreatePageContent, useUpdatePageContent, useDeletePageContent } from "@/hooks/use-page-content";
import { AdminLoginPage } from "./admin-login";

const countries: Country[] = ["rs", "mk", "me", "ba"];

export function AdminPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreatePageDialogOpen, setIsCreatePageDialogOpen] = useState(false);
  const [editingPageContent, setEditingPageContent] = useState<PageContent | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<Country>("rs");
  const { toast } = useToast();

  // Check authentication
  const { data: session, isLoading: sessionLoading, refetch: refetchSession } = useQuery<{
    authenticated: boolean;
    user?: { id: string; username: string };
  }>({
    queryKey: ["/api/admin/session"],
    retry: false,
  });

  const logoutMutation = useMutation({
    mutationFn: () => apiRequest("POST", "/api/admin/logout", {}),
    onSuccess: () => {
      queryClient.clear();
      refetchSession();
      toast({ title: "Logged out successfully" });
    },
  });

  // Show loading while checking session
  if (sessionLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login page if not authenticated
  if (!session?.authenticated) {
    return <AdminLoginPage onLoginSuccess={() => refetchSession()} />;
  }

  const { data: posts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/admin/blog/posts"],
  });

  // Page content queries and mutations
  const { data: pageContents = [], isLoading: isPageContentsLoading } = useAllPageContent();
  const createPageContentMutation = useCreatePageContent();
  const updatePageContentMutation = useUpdatePageContent();
  const deletePageContentMutation = useDeletePageContent();

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

  const handleUpdatePage = (country: Country, pageType: PageType, language: Language, data: InsertPageContent) => {
    updatePageMutation.mutate({ country, pageType, language, data }, {
      onSuccess: () => {
        setEditingPageContent(null);
        toast({ title: "Page content updated successfully" });
      },
      onError: () => {
        toast({ title: "Failed to update page content", variant: "destructive" });
      }
    });
  };

  const handleDeletePage = (country: Country, pageType: PageType, language: Language) => {
    if (confirm("Are you sure you want to delete this page content?")) {
      deletePageMutation.mutate({ country, pageType, language }, {
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
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
            <p className="text-muted-foreground">
              Logged in as <span className="font-semibold">{session.user?.username}</span>
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => logoutMutation.mutate()}
            disabled={logoutMutation.isPending}
            data-testid="button-logout"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="blog-posts" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="blog-posts">Blog Posts</TabsTrigger>
            <TabsTrigger value="page-content">Page Content</TabsTrigger>
            <TabsTrigger value="admin-logs">Admin Logs</TabsTrigger>
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
              <Dialog open={isCreatePageDialogOpen} onOpenChange={setIsCreatePageDialogOpen}>
                <DialogTrigger asChild>
                  <Button data-testid="button-create-page">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Page Content
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Create Page Content</DialogTitle>
                    <DialogDescription>
                      Create country-specific content for different pages
                    </DialogDescription>
                  </DialogHeader>
                  <PageContentForm
                    onSubmit={(data) => createPageContentMutation.mutate(data)}
                    isPending={createPageContentMutation.isPending}
                    onCancel={() => setIsCreatePageDialogOpen(false)}
                  />
                </DialogContent>
              </Dialog>
            </div>

            {isPageContentsLoading ? (
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
                {pageContents.map((content) => (
                  <Card key={`${content.country}-${content.pageType}`} className="relative">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-xl capitalize">
                            {content.pageType} - {COUNTRY_NAMES[content.country as Country]}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {content.title || "No title set"}
                          </CardDescription>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setEditingPageContent(content)}
                            data-testid={`button-edit-${content.country}-${content.pageType}`}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeletePage(content.country as Country, content.pageType as PageType, content.language as Language)}
                            data-testid={`button-delete-${content.country}-${content.pageType}-${content.language}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" data-testid={`badge-country-${content.country}`}>
                          {COUNTRY_NAMES[content.country as Country]}
                        </Badge>
                        <Badge variant="outline" data-testid={`badge-page-${content.pageType}`}>
                          {content.pageType}
                        </Badge>
                        <Badge variant="outline" data-testid={`badge-language-${content.language}`}>
                          {LANGUAGE_NAMES[content.language as Language]}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {editingPageContent && (
              <Dialog open={!!editingPageContent} onOpenChange={() => setEditingPageContent(null)}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Edit Page Content</DialogTitle>
                    <DialogDescription>
                      Update the page content details
                    </DialogDescription>
                  </DialogHeader>
                  <PageContentForm
                    defaultValues={editingPageContent}
                    onSubmit={(data) => updatePageContentMutation.mutate({ country: editingPageContent.country as Country, pageType: editingPageContent.pageType as PageType, language: editingPageContent.language as Language, data })}
                    isPending={updatePageContentMutation.isPending}
                    onCancel={() => setEditingPageContent(null)}
                  />
                </DialogContent>
              </Dialog>
            )}
          </TabsContent>

          <TabsContent value="admin-logs" className="space-y-6">
            <AdminLogsSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function AdminLogsSection() {
  const { data: logs = [], isLoading } = useQuery<any[]>({
    queryKey: ["/api/admin/logs"],
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-4">
              <div className="h-4 bg-muted rounded w-1/2 mb-2" />
              <div className="h-3 bg-muted rounded w-3/4" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (logs.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center text-muted-foreground">
          <p>No admin activity logs yet</p>
        </CardContent>
      </Card>
    );
  }

  const getActionBadge = (action: string) => {
    if (action === "login") return <Badge className="bg-green-500">Login</Badge>;
    if (action === "logout") return <Badge className="bg-gray-500">Logout</Badge>;
    if (action.includes("create")) return <Badge className="bg-blue-500">Create</Badge>;
    if (action.includes("update")) return <Badge className="bg-yellow-500">Update</Badge>;
    if (action.includes("delete")) return <Badge className="bg-red-500">Delete</Badge>;
    return <Badge>{action}</Badge>;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Admin Activity Logs</h2>
        <p className="text-sm text-muted-foreground">
          Showing last {logs.length} actions
        </p>
      </div>

      <div className="space-y-2">
        {logs.map((log: any, index) => (
          <Card key={log.id || index} data-testid={`log-entry-${index}`}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {getActionBadge(log.action)}
                    <span className="font-semibold">{log.adminUsername}</span>
                    {log.resourceType && (
                      <span className="text-sm text-muted-foreground">
                        → {log.resourceType}
                      </span>
                    )}
                  </div>
                  {log.details && (
                    <p className="text-sm text-foreground mb-1">{log.details}</p>
                  )}
                  {log.resourceId && (
                    <p className="text-xs text-muted-foreground">
                      Resource ID: {log.resourceId}
                    </p>
                  )}
                  <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                    <span>🕒 {new Date(log.timestamp).toLocaleString()}</span>
                    {log.ipAddress && <span>📍 {log.ipAddress}</span>}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
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

interface PageContentFormProps {
  defaultValues?: PageContent;
  onSubmit: (data: InsertPageContent) => void;
  isPending: boolean;
  onCancel: () => void;
}

function PageContentForm({ defaultValues, onSubmit, isPending, onCancel }: PageContentFormProps) {
  const form = useForm<InsertPageContent>({
    resolver: zodResolver(insertPageContentSchema),
    defaultValues: defaultValues ? {
      country: defaultValues.country as Country,
      pageType: defaultValues.pageType as PageType,
      language: defaultValues.language as Language,
      title: defaultValues.title,
      content: defaultValues.content,
      metaDescription: defaultValues.metaDescription || "",
    } : {
      country: "rs" as Country,
      pageType: "home" as PageType,
      language: "sr" as Language,
      title: "",
      content: "",
      metaDescription: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-page-content">
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                  disabled={!!defaultValues}
                >
                  <FormControl>
                    <SelectTrigger data-testid="select-country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {COUNTRY_NAMES[country]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pageType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Page Type</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                  disabled={!!defaultValues}
                >
                  <FormControl>
                    <SelectTrigger data-testid="select-page-type">
                      <SelectValue placeholder="Select page type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="home">Home</SelectItem>
                    <SelectItem value="programs">Programs</SelectItem>
                    <SelectItem value="about">About</SelectItem>
                    <SelectItem value="contact">Contact</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Language</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                  disabled={!!defaultValues}
                >
                  <FormControl>
                    <SelectTrigger data-testid="select-language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {COUNTRY_LANGUAGES[form.watch("country")].map((lang) => (
                      <SelectItem key={lang} value={lang}>
                        {LANGUAGE_NAMES[lang]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter page title"
                  {...field}
                  data-testid="input-page-title"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="metaDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meta Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter meta description for SEO"
                  className="resize-none"
                  rows={2}
                  {...field}
                  value={field.value || ""}
                  data-testid="textarea-meta-description"
                />
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
              <FormLabel>Content (HTML)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter page content in HTML format"
                  className="resize-none font-mono text-sm"
                  rows={10}
                  {...field}
                  data-testid="textarea-page-content"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            data-testid="button-cancel-page"
          >
            <X className="w-4 h-4 mr-2" />
            Cancel
          </Button>
          <Button type="submit" disabled={isPending} data-testid="button-save-page">
            <Save className="w-4 h-4 mr-2" />
            {isPending ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </Form>
  );
}