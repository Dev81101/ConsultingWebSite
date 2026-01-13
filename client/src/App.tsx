import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CountryProvider, CountryContext } from "@/lib/country-context";
import { LanguageProvider } from "@/lib/language-context";
import { useContext } from "react";
import Layout from "@/components/layout";
import Home from "@/pages/home";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Programs from "@/pages/programs";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import { AdminPage } from "@/pages/admin";
import UnderConstruction from "@/pages/under-construction";
import ScrollToTop from "@/components/ui/ScrollToTop.tsx";

function CountryRouter() {
  const context = useContext(CountryContext);
  
  if (!context) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }
  
  const { isLoading } = context;
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }
  
  return (
    <LanguageProvider>
      <Layout>
        <Switch>
          {/* Root redirect handled by CountryProvider */}
          <Route path="/" component={() => <div>Redirecting...</div>} />

          {/* Admin routes */}
          <Route path="/admin" component={AdminPage} />
          
          {/* Only enable Macedonian (mk) routes */}
          <Route path="/mk" component={Home} />
          <Route path="/mk/blog" component={Blog} />
          <Route path="/mk/blog/:slug" component={BlogPost} />
          <Route path="/mk/programs" component={Programs} />
          <Route path="/mk/about" component={About} />
          <Route path="/mk/contact" component={Contact} />

          {/* Any other route shows Under Construction */}
          <Route component={UnderConstruction} />
        </Switch>
      </Layout>
    </LanguageProvider>
  );
}

function Router() {
  return (
    <CountryProvider>
      <CountryRouter />
    </CountryProvider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>


  );
}

export default App;
