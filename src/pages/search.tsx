import { SearchApp } from '@/features/(search)/search-app'
import { SearchPoddon } from '@/features/(search)/search-poddon'
import { SearchProductQr } from '@/features/(search)/search-product'
import { SearchSale } from '@/features/(search)/search-sale'
import { UiHeading } from '@/shared/ui/components/ui-heading'
import { HeaderLayout } from '@/widgets/header'

export function SearchPage() {
  return (
    <HeaderLayout>
      <main className="space-y-4">
        <UiHeading level={'1'}>Поиск</UiHeading>
        <div className="flex flex-col gap-2 744:flex-row">
          <SearchProductQr />
          <SearchApp />
          <SearchSale />
          <SearchPoddon />
        </div>
      </main>
    </HeaderLayout>
  )
}
