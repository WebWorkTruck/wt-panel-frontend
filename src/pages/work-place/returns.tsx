import { NavigationPanel } from '@/features/(work-place)/work-place-navigation'
import { authProtectedPage } from '@/features/auth/ui/protected/auth-protected-page'
import { UiHeading } from '@/shared/ui/components/ui-heading'
import { HeaderLayout } from '@/widgets/header'

function ReturnsPage() {
  return (
    <HeaderLayout>
      <main className="space-y-4">
        <UiHeading level={'1'}>Панель</UiHeading>
        <NavigationPanel />
      </main>
    </HeaderLayout>
  )
}

export default authProtectedPage(ReturnsPage)
