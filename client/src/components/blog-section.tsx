import { useQuery } from "@tanstack/react-query";
import { BlogPost } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";
import { useCountry } from "@/lib/country-context";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";
import NewsletterSubscription from "./newsletter-subscription";

const categoryColors: Record<string, string> = {
  "IPARD": "bg-primary/10 text-primary",
  "Tourism": "bg-chart-2/10 text-chart-2",
  "Finance": "bg-chart-3/10 text-chart-3",
  "Manufacturing": "bg-chart-4/10 text-chart-4",
  "Success Story": "bg-chart-5/10 text-chart-5",
  "Technology": "bg-primary/10 text-primary"
};

function BlogCard({ post }: { post: BlogPost }) {
  const { country } = useCountry();
  const { language } = useLanguage();
  const t = useTranslations()[language];
  const categoryColorClass = categoryColors[post.category] || "bg-muted text-muted-foreground";
  
  return (
    <Card className="blog-card bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-52 object-cover"
        data-testid="blog-post-image"
      />
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColorClass}`} data-testid="blog-post-category">
            {post.category}
          </span>
            {/*<span className="text-muted-foreground text-sm ml-3 flex items-center" data-testid="blog-post-date">
            <Calendar className="h-4 w-4 mr-1" />
            {new Date(post.createdAt || new Date()).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>*/}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2" data-testid="blog-post-title">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3" data-testid="blog-post-excerpt">
          {post.excerpt}
        </p>
        <Link href={`/${country}/blog/${post.slug}`}>
          <Button 
            variant="ghost" 
            className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0 h-auto font-semibold"
            data-testid="blog-post-read-more"
          >
            {t.blog.readMore} <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default function BlogSection() {
  const { country } = useCountry();
  const { language } = useLanguage();
  const t = useTranslations()[language];
  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
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
      <section className="py-20 bg-background" id="blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t.blog.title}</h2>
            <p className="text-xl text-muted-foreground">{t.blog.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="animate-pulse">
                <div className="h-48 bg-muted rounded-t-lg"></div>
                <CardContent className="p-6">
                  <div className="h-6 bg-muted rounded mb-3 w-20"></div>
                  <div className="h-6 bg-muted rounded mb-3"></div>
                  <div className="h-16 bg-muted rounded mb-4"></div>
                  <div className="h-4 bg-muted rounded w-24"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-background" id="blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t.blog.title}</h2>
            <p className="text-muted-foreground">{t.blog.error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background" id="blog" data-testid="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t.blog.title}</h2>
          <p className="text-xl text-muted-foreground">{t.blog.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
          {posts?.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                {t.blog.wantMore}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t.blog.newsletterDesc}
              </p>
              <Link href={`/${country}/blog`}>
                <Button className="bg-primary text-primary-foreground px-8 py-3 hover:bg-primary/90" data-testid="blog-view-all">
                  {t.blog.viewAll}
                </Button>
              </Link>
            </div>
            <div>
              <NewsletterSubscription variant="full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
