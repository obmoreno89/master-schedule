import React from 'react';
import icons from '../../../images/icon/icons';
import UserPanel from '../../../partials/management/user/UserPanel';
import ModalUserDelete from '../../../pages/component/ModalUserDelete';

function UserTableItem({
  dataUser,
  userPanelOpen,
  setUserPanelOpen,
  setOpenModalUserDelete,
  openModalUserDelete,
}) {
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
      <table className='table-auto w-full'>
        <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50'>
          <tr>
            <th className='px-2 first:pl-5'>
              <div className='font-semibold text-left'>Nombre</div>
            </th>
            <th className='px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-semibold text-left'>Email</p>
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
