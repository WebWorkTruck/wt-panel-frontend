import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { Button } from '../components/ui/button'

export const UiBackBtnLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="text-xl py-6 font-semibold 1024:text-sm 1024:py-4"
        >
          Назад
        </Button>
      </div>
      <div>{children}</div>
    </div>
  )
}
