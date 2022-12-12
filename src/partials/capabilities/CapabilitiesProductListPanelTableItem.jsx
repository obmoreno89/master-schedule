import AddButtonForTable from '../../pages/component/AddButtonForTable';

function CapabilitiesProductListPanelTableItem({
  setOpenModalPL,
  currentPost,
}) {
  return (
    <>
      <AddButtonForTable
        buttonName='Nueva línea de producto'
        setOpenModalPL={setOpenModalPL}
        group={false}
      />
      {currentPost.map((pl, index) => (
        <tr key={index} className='text-textTableItem'>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <div className='flex items-center'>
              <p className='capitalize'>{pl.name}</p>
            </div>
          </td>
          <td className='px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <p className='text-left font-bold '>{pl.group.name}</p>
          </td>
        </tr>
      ))}
    </>
  );
}

export default CapabilitiesProductListPanelTableItem;
