import { useEffect, useState } from 'react';
import icons from '../../../images/icon/icons';
import UserPanel from '../../../partials/management/user/UserPanel';
import ModalUserDelete from '../../../pages/component/ModalUserDelete';
import { orderUserAsc, orderUserDesc } from '../../capabilities/orderFunc';

function UserTableItem({
  dataUser,
  userPanelOpen,
  setUserPanelOpen,
  setOpenModalUserDelete,
  openModalUserDelete,
  setUser,
  selectUser,
}) {
  const [orderName, setOrderName] = useState({ state: false, asc: false });
  const [orderEmail, setOrderEmail] = useState({ state: false, asc: false });

  useEffect(() => {
    if (orderName.state) {
      if (!orderName.asc) {
        orderUserAsc(selectUser, setUser, 'first_name');
      } else {
        orderUserDesc(selectUser, setUser, 'first_name');
      }
    }
  }, [orderName]);

  useEffect(() => {
    if (orderEmail.state) {
      if (!orderEmail.asc) {
        orderUserAsc(selectUser, setUser, 'email');
      } else {
        orderUserDesc(selectUser, setUser, 'email');
      }
    }
  }, [orderEmail]);

  return (
    <>
      <UserPanel
        setUserPanelOpen={setUserPanelOpen}
        userPanelOpen={userPanelOpen}
      />
      <ModalUserDelete
        openModalUserDelete={openModalUserDelete}
        setOpenModalUserDelete={setOpenModalUserDelete}
      />
      <table className='table-auto w-full table'>
        <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50'>
          <tr>
            <th
              className='px-2 first:pl-5 cursor-pointer'
              onClick={() => {
                setOrderName({ state: true, asc: !orderName.asc });
              }}
            >
              <div className='flex items-center space-x-2'>
                <div className='font-semibold text-left'>Nombre</div>
                <img
                  src={orderName.asc ? icons.doubleDown : icons.doubleUp}
                  alt='Flecha abajo'
                  className='w-5'
                />
              </div>
            </th>
            <th
              className='px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer'
              onClick={() => {
                setOrderEmail({ state: true, asc: !orderEmail.asc });
              }}
            >
              <div className='flex items-center space-x-2'>
                <p className='font-semibold text-left'>Email</p>
                <img
                  src={orderEmail.asc ? icons.doubleDown : icons.doubleUp}
                  alt='Flecha abajo'
                  className='w-5'
                />
              </div>
            </th>
            <th className='px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-semibold text-left'>NMC</p>
            </th>
            <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'>Teléfono</p>
            </th>
            <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
              <p className='font-semibold text-center'>Posición</p>
            </th>
            <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
              <p className='font-semibold text-center'></p>
            </th>
          </tr>
        </thead>
        <tbody className='text-sm divide-y divide-slate-200'>
          {dataUser.map((data, index) => (
            <tr key={index}>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5 lg:w-1/4'>
                <p className='text-textTableItem font-medium  capitalize'>
                  {data.first_name} {data.last_name}
                </p>
                <span className='text-primary'>{data.role.name}</span>
              </td>
              <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='text-left font-semibold'>{data.email}</p>
              </td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='text-left '>{data.nmc}</p>
              </td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='text-center'>{data.telephone}</p>
              </td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='text-center'>{data.position}</p>
              </td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <figure className='flex justify-end items-center space-x-3'>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setUserPanelOpen(true);
                      const json = {
                        first_name: data.first_name,
                        last_name: data.last_name,
                        telephone: data.telephone,
                        nmc: data.nmc,
                        position: data.position,
                        email: data.email,
                        role: data.role.id,
                        id: data.id,
                      };

                      sessionStorage.setItem('userEdit', JSON.stringify(json));
                    }}
                  >
                    <img src={icons.pencilIcon} alt='Lapiz' />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenModalUserDelete(true);
                      const json = {
                        id: data.id,
                        first_name: data.first_name,
                        last_name: data.last_name,
                      };

                      sessionStorage.setItem(
                        'userDelete',
                        JSON.stringify(json)
                      );
                    }}
                  >
                    <img src={icons.garbageIcon} alt='Basura' />
                  </button>
                </figure>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UserTableItem;
