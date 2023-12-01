import React from 'react'
import { highlightQuery } from '@/shared/lib/lib-highlight-text'
import Link from 'next/link'
import { routes } from '@/shared/constants/routing'
import { DataDto, SessionInfoDto } from '@/shared/api/generated'
import { getColorProcessing } from '../../model/use-table'
import { UnderStatusModal } from '../table/under-status-modal'

type Props = {
  appSales: DataDto[]
  searchQuery: string
  session: SessionInfoDto | null
  openActionModal: (id: string, processing: string, subProcessing: string) => void
}

export function ListAppSales({ appSales, searchQuery, openActionModal, session }: Props) {
  return (
    <div className="grid grid-cols-1 744:grid-cols-2 gap-4">
      {appSales.map((item, i) => {
        const isApplicationOrSale = ['Обращение', 'Заявка', 'Сборка'].includes(
          item.processing,
        )

        return (
          <Link
            href={`${isApplicationOrSale ? routes.APPLICATION : routes.SALE}/${item.id}`}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2 items-start"
            key={i}
          >
            <div>{highlightQuery(item.id, searchQuery)}</div>
            <div className="text-gray-600">
              <span>Клиент: </span>
              <span>{highlightQuery(item.client, searchQuery)}</span>
            </div>
            <div className="text-gray-600">
              <span>Менеджер: </span>
              <span>{highlightQuery(item.responsible.name, searchQuery)}</span>
              {highlightQuery(item.responsible.phone, searchQuery)}
            </div>
            <div className="text-gray-600">
              <span>Исполнитель: </span>
              <span>{highlightQuery(item.porter.name, searchQuery)}</span>
            </div>
            <div className="flex gap-2 items-center">
              <div
                className={`${getColorProcessing(
                  item.processing,
                )} py-2 px-4 rounded-lg font-semibold inline-block`}
              >
                <span>{item.processing} </span>
                <span className="border-b-[1px] border-black">{item.tk}</span>
              </div>
              <UnderStatusModal
                subProcessing={item.sub_processing}
                processing={item.processing}
              />
            </div>

            {session?.roles.some((role) =>
              ['Администратор', 'Менеджер'].includes(role.title),
            ) && (
              <>
                {['Обращение', 'Заявка', 'Сборка', 'Продажа', 'Упаковка'].includes(
                  item.processing,
                ) ? (
                  <button
                    onClick={(e) => [
                      openActionModal(item.id, item.processing, item.sub_processing),
                      e.preventDefault(),
                    ]}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Действие
                  </button>
                ) : null}
              </>
            )}
          </Link>
        )
      })}
    </div>
  )
}
