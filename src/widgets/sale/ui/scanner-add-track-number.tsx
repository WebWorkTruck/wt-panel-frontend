import { Html5QrcodePlugin } from '@/shared/lib/lib-html5-qr-scanner'
import AnimateError from '@/shared/ui/animations/error'
import AnimateSuccess from '@/shared/ui/animations/success'
import { UiHeading } from '@/shared/ui/components/ui-heading'
import { UiSpinner } from '@/shared/ui/components/ui-spinner'
import { UiPageModalLayout } from '@/shared/ui/layouts/ui-page-modal-layout'

type Props = {
  saleId: string
  isPending: boolean
  isError: boolean
  isSuccess: boolean
  close: Function
  successScan: (decodedText: string, decodedResult: any, saleId: string) => void
}

export default function ScannerAddTrackNumber({
  saleId,
  isPending,
  isError,
  isSuccess,
  close,
  successScan,
}: Props) {
  return (
    <UiPageModalLayout close={() => close()}>
      <div className="flex flex-col gap-4 items-center">
        <UiHeading level={'4'}>Добавление трек номера</UiHeading>
        {isPending && (
          <div className="self-center py-16">
            <UiSpinner />
          </div>
        )}
        {isError && (
          <div className="flex gap-4 flex-col">
            <AnimateError />
            <UiHeading level={'5'}>Произошла ошибка</UiHeading>
          </div>
        )}
        {isSuccess && (
          <div className="flex gap-4 flex-col">
            <AnimateSuccess />
            <UiHeading level={'5'}>Успешно</UiHeading>
          </div>
        )}
        {!isPending && !isError && !isSuccess && (
          <div className="min-w-[800px] w-full">
            <Html5QrcodePlugin
              fps={10}
              qrbox={500}
              disableFlip={false}
              qrCodeSuccessCallback={(decodedText: any, decodedResult: any) =>
                successScan(decodedText, decodedResult, saleId)
              }
            />
          </div>
        )}
      </div>
    </UiPageModalLayout>
  )
}
