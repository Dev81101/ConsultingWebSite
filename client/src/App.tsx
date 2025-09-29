import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CountryProvider, useCountry, CountryContext } from "@/lib/country-context";
import { useContext } from "react";
import Layout from "@/components/layout";
import Home from "@/pages/home";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Programs from "@/pages/programs";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import { AdminPage } from "@/pages/admin";
import NotFound from "@/pages/not-found";

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
    <Layout>
      <Switch>
        {/* Root redirect handled by CountryProvider */}
        <Route path="/" component={() => <div>Redirecting...</div>} />
        
        {/* Admin routes */}
        <Route path="/admin" component={AdminPage} />
        
        {/* Country-based routes */}
        <Route path="/:country" component={Home} />
        <Route path="/:country/blog" component={Blog} />
        <Route path="/:country/blog/:slug" component={BlogPost} />
        <Route path="/:country/programs" component={Programs} />
        <Route path="/:country/about" component={About} />
        <Route path="/:country/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
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
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
