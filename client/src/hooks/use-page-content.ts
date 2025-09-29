import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { PageContent, InsertPageContent, Country, PageType } from "@shared/schema";

export function usePageContent(country: Country, pageType: PageType) {
  return useQuery<PageContent>({
    queryKey: ['/api/page-content', country, pageType],
    enabled: !!(country && pageType)
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
    mutationFn: async ({ country, pageType, data }: { 
      country: Country; 
      pageType: PageType; 
      data: InsertPageContent 
    }): Promise<PageContent> => {
      const res = await apiRequest('PUT', `/api/admin/page-content/${country}/${pageType}`, data);
      return res.json();
    },
    onSuccess: (_, { country, pageType }) => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/page-content'] });
      queryClient.invalidateQueries({ queryKey: ['/api/page-content', country, pageType] });
    }
  });
}

export function useDeletePageContent() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ country, pageType }: { country: Country; pageType: PageType }): Promise<void> => {
      await apiRequest('DELETE', `/api/admin/page-content/${country}/${pageType}`);
    },
    onSuccess: (_, { country, pageType }) => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/page-content'] });
      queryClient.invalidateQueries({ queryKey: ['/api/page-content', country, pageType] });
    }
  });
}