import { AuthProtectedPage } from '@/features/auth/ui/protected/auth-protected-page'
import { LearningWorkPlace, useLearning } from '@/features/work-place/learning-work-place'
import { Panel } from '@/features/work-place/panel'
import { NavigationPanel } from '@/features/work-place/work-place-navigation'

import { UiHeaderLayout } from '@/shared/ui/layouts/ui-header-layout'
import { UiWorkPlaceLayout } from '@/shared/ui/layouts/ui-work-place-layout'

export function PanelPage() {
  const { endLearn, learnStatus, getLocal } = useLearning()

  if (!getLocal) return

  return (
    <UiHeaderLayout>
      <main>
        <AuthProtectedPage>
          {learnStatus != 'false' ? (
            <LearningWorkPlace endLearn={endLearn} />
          ) : (
            <UiWorkPlaceLayout
              title={'Панель'}
              navigation={<NavigationPanel />}
              content={<Panel />}
            />
          )}
        </AuthProtectedPage>
      </main>
    </UiHeaderLayout>
  )
}
