import {
  useGetApplicationsOrSales,
  useGetCategories,
  useMoveAppSale,
} from '@/entities/panel/queries'
import { useDebouncedValue } from '@/shared/lib/lib-react-std'
import { useEffect, useState } from 'react'
import { useAppSalesState } from './store'
import { useRouter } from 'next/router'

export function useAppSales() {
  const router = useRouter()
  const appSalesState = useAppSalesState()

  const categories = useGetCategories()
  const count = 30
  const debouncedQ = useDebouncedValue(appSalesState.q, 800)
  const appSales = useGetApplicationsOrSales(
    appSalesState.currentCategory,
    appSalesState.type,
    appSalesState.page.toString(),
    count.toString(),
    debouncedQ,
  )

  useEffect(() => {
    appSalesState.setPage(1)
  }, [appSalesState.currentCategory])

  useEffect(() => {
    const urlCategory = router.query.category as string
    const urlType = router.query.type as string

    if (urlCategory) {
      appSalesState.changeCategory(urlCategory, urlType)
    }
  }, [router.query.category])

  return {
    categories: {
      currentCategory: appSalesState.currentCategory,
      changeCategory: appSalesState.changeCategory,
      isLoading: categories.isLoading,
      isError: categories.isError,
      data: categories.data,
    },
    search: {
      q: appSalesState.q,
      setQ: appSalesState.setQ,
    },
    appSales: {
      isLoading: appSales.isLoading,
      isError: appSales.isError,
      data: appSales.data,
      page: appSalesState.page,
      setPage: appSalesState.setPage,
    },
  }
}
export function useMoveAppSaleA() {
  const moveAppSale = useMoveAppSale()
  const [actionModal, setActionModal] = useState(false)
  const [actionId, setActionId] = useState('')
  const [actionProcessing, setActionProcessing] = useState('')
  const [actionSubProcessng, setActionSubProcessng] = useState('')
  const [actionCreateSaleModal, setActionCreateSaleModal] = useState(false)

  function openCreateSaleModal() {
    setActionModal(false)
    setActionCreateSaleModal(true)
  }
  function openActionModal(
    actionId: string,
    actionProcessing: string,
    actionSubProcessng: string,
  ) {
    setActionModal(true)
    setActionId(actionId)
    setActionProcessing(actionProcessing)
    setActionSubProcessng(actionSubProcessng)
    moveAppSale.reset()
  }
  return {
    actionModal,
    openActionModal,
    openCreateSaleModal,
    actionCreateSaleModal,
    moveAppSale,
    actionId,
    setActionCreateSaleModal,
    setActionModal,
    actionProcessing,
    actionSubProcessng,
  }
}
