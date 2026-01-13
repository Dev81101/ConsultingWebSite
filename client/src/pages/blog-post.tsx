import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { BlogPost as BlogPostType } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useCountry } from "@/lib/country-context";

function stripHtmlTags(html: string): string {
  if (!html) return '';
  return html
    .replace(/<\/p>\s*<p>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/?(h[1-6]|div|section|article)[^>]*>/gi, '\n\n')
    .replace(/<\/?(ul|ol)[^>]*>/gi, '\n')
    .replace(/<li[^>]*>/gi, '• ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const categoryColors: Record<string, string> = {
  "IPARD": "bg-primary/10 text-primary",
  "Tourism": "bg-chart-2/10 text-chart-2",
  "Finance": "bg-chart-3/10 text-chart-3",
  "Manufacturing": "bg-chart-4/10 text-chart-4",
  "Success Story": "bg-chart-5/10 text-chart-5",
  "Technology": "bg-primary/10 text-primary"
};

export default function BlogPost() {
  const { country } = useCountry();
  const [match, params] = useRoute("/:country/blog/:slug");
  const slug = params?.slug;

  const { data: post, isLoading, error } = useQuery<BlogPostType>({
    queryKey: ["/api/blog/posts", slug, country],
    enabled: !!slug,
    queryFn: async () => {
      const response = await fetch(`/api/blog/posts/${slug}?country=${country}`);
      if (!response.ok) {
        throw new Error('Failed to fetch blog post');
      }
      return response.json();
    },
  });

  const { data: relatedPosts } = useQuery<BlogPostType[]>({
    queryKey: ["/api/blog/featured", country],
    queryFn: async () => {
      const response = await fetch(`/api/blog/featured?country=${country}`);
      if (!response.ok) {
        throw new Error('Failed to fetch featured posts');
      }
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded mb-8 w-32"></div>
            <div className="h-12 bg-muted rounded mb-4"></div>
            <div className="h-6 bg-muted rounded mb-8 w-48"></div>
            <div className="h-64 bg-muted rounded mb-8"></div>
            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 bg-muted rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-16 min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href={`/${country}/blog`}>
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const categoryColorClass = categoryColors[post.category] || "bg-muted text-muted-foreground";

  return (
    <div className="pt-16 min-h-screen bg-background" data-testid="blog-post-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link href={`/${country}/blog`}>
          <Button variant="ghost" className="mb-8" data-testid="back-to-blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <article className="mb-16">
          <div className="mb-6">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${categoryColorClass} mb-4`} data-testid="post-category">
              {post.category}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="post-title">
              {post.title}
            </h1>
            <div className="flex items-center text-muted-foreground mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              <span data-testid="post-date">
                {new Date(post.createdAt || new Date()).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-64 lg:h-96 object-cover rounded-lg mb-8"
            data-testid="post-image"
          />

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground" data-testid="post-content">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {stripHtmlTags(post.excerpt)}
            </p>
            <div className="space-y-6 leading-relaxed">
              {stripHtmlTags(post.content).split('\n\n').filter(p => p.trim()).map((paragraph, index) => (
                <p key={index} className="text-foreground whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center flex-wrap gap-2" data-testid="post-tags">
                <Tag className="h-4 w-4 text-muted-foreground mr-2" />
                {post.tags.map((tag, index) => (
                  <span key={index} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Related Posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section data-testid="related-posts">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.slice(0, 3).map((relatedPost) => {
                const relatedCategoryColorClass = categoryColors[relatedPost.category] || "bg-muted text-muted-foreground";
                return (
                  <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow duration-300">
                    <img 
                      src={relatedPost.imageUrl} 
                      alt={relatedPost.title}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    <CardContent className="p-4">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${relatedCategoryColorClass} mb-2`}>
                        {relatedPost.category}
                      </span>
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <Link href={`/${country}/blog/${relatedPost.slug}`}>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto">
                          Read More →
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
