import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";




const ReactTable = (props) => {
  const {data,columns,filter,setFilter} = props; //destructers
  const table  = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filter,
    },
    onGlobalFilterChange: setFilter,
  });
  return (
    <div>
      <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr
            key={headerGroup.id}
            className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
          >
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="py-3 px-6 text-left">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
        <tbody className="text-gray-700 text-sm font-light">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="py-3 px-6 text-left whitespace-nowrap"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
      <div>
        <button
          onClick={() => table.setPageIndex(0)}
          className="p-5 border-b hover:border-emerald-600 rounded-full border-gray-200 hover:bg-gray-100"
        >
          First Page
        </button>
        <button
          onClick={() => table.previousPage()}
          className="p-5 border-b hover:border-emerald-600 rounded-full border-gray-200 hover:bg-gray-100"
        >
          Previous Page
        </button>
        <button
          onClick={() => table.nextPage()}
          className="p-5 border-b hover:border-emerald-600 rounded-full border-gray-200 hover:bg-gray-100"
        >
          Next Page
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          className="p-5 border-b hover:border-emerald-600 rounded-full border-gray-200 hover:bg-gray-100"
        >
          Last Page
        </button>
      </div>
    </div>
  );
};

export default ReactTable;
