import {
  panelControllerGetApplicationSale,
  panelControllerGetCategories,
  panelControllerMoveApplicationSale,
} from '@/shared/api/generated'
import { queryClient } from '@/shared/api/query-client'
import { toast } from '@/shared/ui/components/ui/use-toast'
import { useMutation, useQuery } from '@tanstack/react-query'

const applicationsOrSales = 'applications-or-sales'
const categoriesKey = 'categories'

export function useGetAppOrSales(
  title: string,
  type: string,
  page: string,
  count: string,
  q: string,
) {
  const query = useQuery({
    queryKey: [applicationsOrSales, title, type, page],
    queryFn: () =>
      panelControllerGetApplicationSale({
        title,
        type,
        page,
        count,
        text: q,
      }),
  })

  return query
}

export function useGetCategoriesByAppOrSales() {
  return useQuery({
    queryKey: [categoriesKey],
    queryFn: panelControllerGetCategories,
  })
}

export function useMoveAppSale() {
  return useMutation({
    mutationFn: panelControllerMoveApplicationSale,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [categoriesKey],
      })
      queryClient.invalidateQueries({
        queryKey: [applicationsOrSales],
      })
      queryClient.invalidateQueries({
        queryKey: ['application'],
      })
      queryClient.invalidateQueries({
        queryKey: ['sale'],
      })
      toast({
        title: 'Успешно',
        variant: 'success',
      })
    },
    onError: () => {
      toast({
        title: 'Ошибка',
        variant: 'destructive',
      })
    },
  })
}
