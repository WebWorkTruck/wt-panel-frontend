import { useMoveAppSale } from '@/entities/panel-v2'
import { Button } from '@/shared/ui/components/ui/button'

type Props = {
  id: string
  processing: string
}

export function GetToWork({ id, processing }: Props) {
  const moveAppSale = useMoveAppSale()

  return (
    <Button
      variant={'primary'}
      onClick={() =>
        moveAppSale.mutate({
          id: id,
          processing: processing,
          sub_processing: '2',
          type: 'Заявка',
          move_myself: true,
          comment_for_collector: '',
        })
      }
    >
      Взять в работу
    </Button>
  )
}
