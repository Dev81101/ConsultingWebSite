import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCountry } from "@/lib/country-context";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";
import NewsletterSubscription from "./newsletter-subscription";
import LanguageSelector from "./language-selector";

export default function Navigation() {
  const { country } = useCountry();
  const { language } = useLanguage();
  const t = useTranslations()[language];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => {
    const countryPath = `/${country}${path === '/' ? '' : path}`;
    return location === countryPath || (path === '/' && location === `/${country}`);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${country}`} className="flex items-center" data-testid="logo-link">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">
              W
            </div>
            <span className="ml-2 text-xl font-bold text-foreground">WVP Plus Consulting</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href={`/${country}`} 
              className={cn(
                "text-foreground hover:text-primary transition-colors duration-200",
                isActive("/") && "text-primary"
              )}
              data-testid="nav-home"
            >
              {t.nav.home}
            </Link>
            
            {/* Programs Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsProgramsOpen(true)}
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <button 
                className="flex items-center text-foreground hover:text-primary transition-colors duration-200"
                data-testid="nav-programs"
              >
                {t.nav.programs} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={cn(
                "absolute top-full left-0 w-96 bg-card border border-border rounded-lg shadow-xl mt-2 transition-all duration-300",
                isProgramsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              )}>
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-6">
                    {/* IPARD Programs */}
                    <div>
                      <h3 className="font-semibold text-primary mb-3">IPARD Programs</h3>
                      <div className="space-y-2">
                        <Link 
                          href={`/${country}/programs#ipard1`} 
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                          data-testid="dropdown-ipard1"
                        >
                          IPARD I - Agricultural Investment
                        </Link>
                        <Link 
                          href={`/${country}/programs#ipard2`} 
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                          data-testid="dropdown-ipard2"
                        >
                          IPARD II - Processing Facilities
                        </Link>
                        <Link 
                          href={`/${country}/programs#ipard3`} 
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                          data-testid="dropdown-ipard3"
                        >
                          IPARD III - Rural Development
                        </Link>
                      </div>
                    </div>
                    
                    {/* Financial Aid */}
                    <div>
                      <h3 className="font-semibold text-primary mb-3">Financial Aid</h3>
                      <div className="space-y-2">
                        <Link 
                          href={`/${country}/programs#manufacturing`} 
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                          data-testid="dropdown-manufacturing"
                        >
                          Manufacturing Support
                        </Link>
                        <Link 
                          href={`/${country}/programs#tourism`} 
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                          data-testid="dropdown-tourism"
                        >
                          Tourism Development
                        </Link>
                      </div>
                    </div>
                    
                    {/* Consulting Services */}
                    <div>
                      <h3 className="font-semibold text-primary mb-3">Consulting Services</h3>
                      <div className="space-y-2">
                        <Link 
                          href={`/${country}/programs#micro`} 
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                          data-testid="dropdown-micro"
                        >
                          Micro Business Consulting
                        </Link>
                        <Link 
                          href={`/${country}/programs#business-plans`} 
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                          data-testid="dropdown-business-plans"
                        >
                          Business Plan Development
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsBlogOpen(true)}
              onMouseLeave={() => setIsBlogOpen(false)}
            >
              <button 
                className={cn(
                  "flex items-center text-foreground hover:text-primary transition-colors duration-200",
                  isActive("/blog") && "text-primary"
                )}
                data-testid="nav-blog"
              >
                {t.nav.blog} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={cn(
                "absolute top-full left-0 w-80 bg-card border border-border rounded-lg shadow-xl mt-2 transition-all duration-300",
                isBlogOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              )}>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Link 
                        href={`/${country}/blog`} 
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                        data-testid="dropdown-blog-all"
                      >
                        View All Posts
                      </Link>
                    </div>
                    <div className="border-t pt-4">
                      <h3 className="font-semibold text-primary mb-3">Newsletter</h3>
                      <NewsletterSubscription variant="compact" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link 
              href={`/${country}/about`} 
              className={cn(
                "text-foreground hover:text-primary transition-colors duration-200",
                isActive("/about") && "text-primary"
              )}
              data-testid="nav-about"
            >
              {t.nav.about}
            </Link>
            <LanguageSelector />
            <Link href={`/${country}/contact`} data-testid="nav-contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t.nav.contact}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href={`/${country}`} 
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md"
                data-testid="mobile-nav-home"
              >
                {t.nav.home}
              </Link>
              <Link 
                href={`/${country}/programs`} 
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md"
                data-testid="mobile-nav-programs"
              >
                {t.nav.programs}
              </Link>
              <Link 
                href={`/${country}/blog`} 
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md"
                data-testid="mobile-nav-blog"
              >
                {t.nav.blog}
              </Link>
              <Link 
                href={`/${country}/about`} 
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md"
                data-testid="mobile-nav-about"
              >
                {t.nav.about}
              </Link>
              <Link 
                href={`/${country}/contact`} 
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md"
                data-testid="mobile-nav-contact"
              >
                {t.nav.contact}
              </Link>
              <div className="px-3 py-2">
                <LanguageSelector />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
