import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { PageContent, InsertPageContent, Country, PageType, Language } from "@shared/schema";

export function usePageContent(country: Country, pageType: PageType, language: Language) {
  return useQuery<PageContent>({
    queryKey: ['/api/page-content', country, pageType, language],
    enabled: !!(country && pageType && language)
  });
}

export function useAllPageContent() {
  return useQuery<PageContent[]>({
    queryKey: ['/api/admin/page-content']
  });
}

export function useCreatePageContent() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: InsertPageContent): Promise<PageContent> => {
      const res = await apiRequest('POST', '/api/admin/page-content', data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/page-content'] });
      queryClient.invalidateQueries({ queryKey: ['/api/page-content'] });
    }
  });
}

export function useUpdatePageContent() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ country, pageType, language, data }: { 
      country: Country; 
      pageType: PageType;
      language: Language;
      data: InsertPageContent 
    }): Promise<PageContent> => {
      const res = await apiRequest('PUT', `/api/admin/page-content/${country}/${pageType}/${language}`, data);
      return res.json();
    },
    onSuccess: (_, { country, pageType, language }) => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/page-content'] });
      queryClient.invalidateQueries({ queryKey: ['/api/page-content', country, pageType, language] });
    }
  });
}

export function useDeletePageContent() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ country, pageType, language }: { 
      country: Country; 
      pageType: PageType;
      language: Language;
    }): Promise<void> => {
      await apiRequest('DELETE', `/api/admin/page-content/${country}/${pageType}/${language}`);
    },
    onSuccess: (_, { country, pageType, language }) => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/page-content'] });
      queryClient.invalidateQueries({ queryKey: ['/api/page-content', country, pageType, language] });
    }
  });
}