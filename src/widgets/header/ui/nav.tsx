import { useRouter } from 'next/router'
import { linksPanels, linksMyself, linksGeneral } from './config'
// import { useHeaderStore } from '../model/store'
import { useSessionQuery } from '@/entities/session'
import { UiLink } from '@/shared/ui/components/ui-link'
import clsx from 'clsx'
import { Separator } from '@/shared/ui/components/ui/separator'
import { mobileMenuStore } from '../model/mobile-menu.store'

export function Nav() {
  const { pathname } = useRouter()
  // const { isHeaderVisible } = useHeaderStore()
  const session = useSessionQuery()
  const { handleIsShow } = mobileMenuStore()

  return (
    <nav className="w-full space-y-2">
      <div>
        {linksPanels.map((link, i: number) => {
          const isCurrentPage = pathname.includes(link.route)
          const shouldRenderLink =
            (link.isAdmin &&
              !session.isError &&
              session.data &&
              session.data.roles.some((role) => role.title === 'Администратор')) ||
            !link.isAdmin

          return shouldRenderLink ? (
            <UiLink
              onClick={() => handleIsShow(false)}
              href={link.route}
              className={clsx(
                'flex gap-3 items-center text-white 1024:hover:opacity-100 p-4',
                {
                  'opacity-100': isCurrentPage,
                  'opacity-40': !isCurrentPage,
                  // 'justify-center': !isHeaderVisible,
                  // 'pl-5 ': isHeaderVisible,
                },
              )}
              key={i}
            >
              <div className="hidden 1024:block">
                <link.icon />
              </div>
              {/* {isHeaderVisible && ( */}
              <span className={clsx('text-2xl font-bold 1512:text-sm')}>{link.name}</span>
              {/* )} */}
            </UiLink>
          ) : null
        })}
      </div>
      <Separator className="opacity-40" />
      <div>
        {linksGeneral.map((link, i: number) => {
          const isCurrentPage = pathname.includes(link.route)
          const shouldRenderLink =
            (link.isAdmin &&
              !session.isError &&
              session.data &&
              session.data.roles.some((role) => role.title === 'Администратор')) ||
            !link.isAdmin

          return shouldRenderLink ? (
            <UiLink
              onClick={() => handleIsShow(false)}
              href={link.route}
              className={clsx(
                'flex gap-3 items-center text-white 1024:hover:opacity-100 p-4',
                {
                  'opacity-100': isCurrentPage,
                  'opacity-40': !isCurrentPage,
                  // 'justify-center': !isHeaderVisible,
                  // 'pl-5 ': isHeaderVisible,
                },
              )}
              key={i}
            >
              <div className="hidden 1024:block">
                <link.icon />
              </div>
              {/* {isHeaderVisible && ( */}
              <span className={clsx('text-2xl font-bold 1512:text-sm')}>{link.name}</span>
              {/* )} */}
            </UiLink>
          ) : null
        })}
      </div>
      <Separator className="opacity-40" />
      <div>
        {linksMyself.map((link, i: number) => {
          const isCurrentPage = pathname.includes(link.route)
          const shouldRenderLink =
            (link.isAdmin &&
              !session.isError &&
              session.data &&
              session.data.roles.some((role) => role.title === 'Администратор')) ||
            !link.isAdmin

          return shouldRenderLink ? (
            <UiLink
              onClick={() => handleIsShow(false)}
              href={link.route}
              className={clsx(
                'flex gap-3 items-center text-white 1024:hover:opacity-100 p-4',
                {
                  'opacity-100': isCurrentPage,
                  'opacity-40': !isCurrentPage,
                  // 'justify-center': !isHeaderVisible,
                  // 'pl-5 ': isHeaderVisible,
                },
              )}
              key={i}
            >
              <div className="hidden 1024:block">
                <link.icon />
              </div>
              {/* {isHeaderVisible && ( */}
              <span className={clsx('text-2xl font-bold 1512:text-sm')}>{link.name}</span>
              {/* )} */}
            </UiLink>
          ) : null
        })}
      </div>
    </nav>
  )
}
