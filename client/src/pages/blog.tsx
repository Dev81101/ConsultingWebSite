import { useQuery } from "@tanstack/react-query";
import { BlogPost } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { ArrowRight, Calendar, Search } from "lucide-react";
import { useState } from "react";
import { useCountry } from "@/lib/country-context";

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
  const categoryColorClass = categoryColors[post.category] || "bg-muted text-muted-foreground";
  
  return (
    <Card className="blog-card bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-48 object-cover"
        data-testid="blog-card-image"
      />
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColorClass}`} data-testid="blog-card-category">
            {post.category}
          </span>
          <span className="text-muted-foreground text-sm ml-3 flex items-center" data-testid="blog-card-date">
            <Calendar className="h-4 w-4 mr-1" />
            {new Date(post.createdAt || new Date()).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2" data-testid="blog-card-title">
          {post.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3" data-testid="blog-card-excerpt">
          {post.excerpt}
        </p>
        <Link href={`/${country}/blog/${post.slug}`}>
          <Button 
            variant="ghost" 
            className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0 h-auto font-semibold"
            data-testid="blog-card-read-more"
          >
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default function Blog() {
  const { country } = useCountry();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts", country],
    queryFn: async () => {
      const response = await fetch(`/api/blog/posts?country=${country}`);
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
      return response.json();
    },
  });

  const categories = ["All", "IPARD", "Tourism", "Finance", "Manufacturing", "Success Story", "Technology"];

  const filteredPosts = posts?.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Blog</h1>
            <p className="text-xl text-muted-foreground">Insights, stories, and expertise from our team</p>
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
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Blog</h1>
            <p className="text-muted-foreground">Unable to load blog posts at this time.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-background" data-testid="blog-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Blog</h1>
          <p className="text-xl text-muted-foreground">Insights, stories, and expertise from our team</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="blog-search"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
                data-testid={`category-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts && filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg" data-testid="no-posts-message">
              No blog posts found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
