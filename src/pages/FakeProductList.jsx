function FakeProductList() {
  const title = "NEMAH.140 Fr Overlap";
  const group = "A";

  return (
    <>
      <tr
        className="text-textTableItem"
      >
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="flex items-center">
            <p className="capitalize">{title}</p>
          </div>
        </td>
        <td className="px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <p className="text-left font-bold ">{group}</p>
        </td>
      </tr>
    </>
  );
}

export default FakeProductList;
