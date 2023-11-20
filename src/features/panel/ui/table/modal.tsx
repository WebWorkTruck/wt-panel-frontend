import { DataDto } from '@/shared/api/generated'
import { useModal } from '../../model/use-modal'
import { useMoveAppSaleA, useRefuseApplication } from '../../model/use-move-app-sale'
import { FormCreateSale } from './form-create-sale'

export const Modal = ({ item }: { item: DataDto }) => {
  const modal = useModal()
  const move = useMoveAppSaleA()
  const refuselApplication = useRefuseApplication()

  return (
    <div ref={modal.modalRef}>
      {modal.createSaleModal && <FormCreateSale close={modal.setCreateSaleModal} id={item.id} />}
      <button onClick={() => (modal.isShow ? modal.close() : modal.open())}>Изменить</button>
      {modal.isShow && (
        <div className="absolute flex flex-col bg-white  right-0 z-10 rounded-lg shadow-xl mt-2 border">
          {item.processing === 'Обращение' && (
            <>
              <button
                className="hover:bg-gray-100 py-3 transition-all px-6"
                onClick={() =>
                  move.handleSubmit({
                    id: item.id,
                    processing: 'Заявка',
                    sub_processing: '1',
                    type: 'Заявка',
                    move_myself: false,
                  })
                }
              >
                В работу
              </button>
              <button
                className="hover:bg-gray-100 py-3 transition-all px-6"
                onClick={() => refuselApplication.handleSubmit({ id: item.id })}
              >
                Отказ
              </button>
            </>
          )}
          {item.processing === 'Заявка' && (
            <>
              <button
                className="hover:bg-gray-100 py-3 transition-all px-6"
                onClick={() =>
                  move.handleSubmit({
                    id: item.id,
                    processing: 'Сборка',
                    sub_processing: '1',
                    type: 'Заявка',
                    move_myself: false,
                  })
                }
              >
                Передать на сборку
              </button>
              <button
                className="hover:bg-gray-100 py-3 transition-all px-6"
                onClick={() =>
                  move.handleSubmit({
                    id: item.id,
                    processing: 'Сборка',
                    sub_processing: '1',
                    type: 'Заявка',
                    move_myself: true,
                  })
                }
              >
                Собрать самому
              </button>
              <button
                className="hover:bg-gray-100 py-3 transition-all px-6"
                onClick={() => refuselApplication.handleSubmit({ id: item.id })}
              >
                Отказ
              </button>
            </>
          )}
          {item.processing === 'Сборка' && (
            <>
              <button
                className="hover:bg-gray-100 py-3 transition-all px-6"
                onClick={() => modal.setCreateSaleModal(!modal.createSaleModal)}
              >
                Превратить в продажу
              </button>
              <button
                className="hover:bg-gray-100 py-3 transition-all px-6"
                onClick={() =>
                  move.handleSubmit({
                    id: item.id,
                    processing: 'Сборка',
                    sub_processing: '1',
                    type: 'Заявка',
                    move_myself: false,
                  })
                }
              >
                Пересобрать
              </button>
              <button
                className="hover:bg-gray-100 py-3 transition-all px-6"
                onClick={() => refuselApplication.handleSubmit({ id: item.id })}
              >
                Отказ
              </button>
            </>
          )}
          {item.processing === 'Продажа' && (
            <>
              <button
                className="hover:bg-gray-100 py-3 transition-all px-6"
                onClick={() =>
                  move.handleSubmit({
                    id: item.id,
                    processing: 'Упаковка',
                    sub_processing: '1',
                    type: 'Продажа',
                    move_myself: false,
                  })
                }
              >
                Отправить на упаковку
              </button>
              <button
                className="hover:bg-gray-100 py-3 transition-all px-6"
                onClick={() =>
                  move.handleSubmit({
                    id: item.id,
                    processing: 'Заказ получен',
                    sub_processing: '0',
                    type: 'Продажа',
                    move_myself: false,
                  })
                }
              >
                Отдать клиенту
              </button>
            </>
          )}
          {item.processing === 'Упаковка' && (
            <>
              <button
                className="hover:bg-gray-100 py-3 transition-all px-6"
                onClick={() =>
                  move.handleSubmit({
                    id: item.id,
                    processing: 'Отправка в тк',
                    sub_processing: '1',
                    type: 'Продажа',
                    move_myself: false,
                  })
                }
              >
                Отправить в тк
              </button>
              <button
                className="hover:bg-gray-100 py-3 transition-all px-6"
                onClick={() =>
                  move.handleSubmit({
                    id: item.id,
                    processing: 'Заказ получен',
                    sub_processing: '0',
                    type: 'Продажа',
                    move_myself: false,
                  })
                }
              >
                Выдать клиенту
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
