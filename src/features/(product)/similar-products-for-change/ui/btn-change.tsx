import { useChangeProduct } from '@/entities/panel/api'
import { Button } from '@/shared/ui/components/ui/button'
import { useSimilarProductsForChangeStore } from '../model/store'
import { UiSpinner } from '@/shared/ui/components/ui-spinner'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  appId: string
  pose: number
  setIsShow: Dispatch<SetStateAction<boolean>>
}

export function BtnChange({ appId, pose, setIsShow }: Props) {
  const { selectedProduct, setSelectProduct, setPage } =
    useSimilarProductsForChangeStore()
  const changeProduct = useChangeProduct()

  return (
    <Button
      disabled={changeProduct.isPending}
      className="sticky bottom-0"
      variant={'success'}
      onClick={() => [
        changeProduct.mutate({
          id: appId,
          indCode: selectedProduct,
          pose,
          type: 'Заявка',
        }),
        setIsShow(false),
        setSelectProduct(''),
        setPage(1),
      ]}
    >
      {changeProduct.isPending ? <UiSpinner /> : 'Заменить'}
    </Button>
  )
}
