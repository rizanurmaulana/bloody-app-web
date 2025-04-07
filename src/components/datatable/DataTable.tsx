import Input from '../form/input/InputField';
import Button from '../ui/button/Button';
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';
import DataTablePagination from './DataTablePagination';

import { useState } from 'react';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ColumnDef } from '@tanstack/react-table';
import { Table, TableBody, TableHeader } from '../ui/table';

interface DataTableProps<T> {
  tableName?: string;
  data: T[];
  columns: ColumnDef<T>[];
  exportCSV?: () => void;
  placeholder?: string;
}

export default function DataTable<T>({
  tableName,
  data,
  columns,
  exportCSV,
  placeholder = 'Cari...',
}: DataTableProps<T>) {
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      {/* Table */}
      <div className='overflow-hidden rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-white/[0.03]'>
        <div className='mb-4 flex flex-col gap-2 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6'>
          <div>
            <h3 className='text-lg font-semibold text-gray-800 dark:text-white/90'>
              {tableName}
            </h3>
          </div>
          {/* Search and Export */}
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
            <form>
              <div className='relative'>
                <span className='pointer-events-none absolute top-1/2 left-4 -translate-y-1/2'>
                  <svg
                    className='fill-gray-500 dark:fill-gray-400'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z'
                      fill=''
                    />
                  </svg>
                </span>
                <Input
                  type='text'
                  placeholder={placeholder}
                  value={globalFilter}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                  className='dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-[42px] rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-[42px] text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden xl:w-[300px] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30'
                />
              </div>
            </form>
            <Button
              onClick={exportCSV}
              size='sm'
              variant='outline'
              disabled={!exportCSV}
            >
              Export CSV
            </Button>
          </div>
        </div>
        <div className='custom-scrollbar max-w-full overflow-x-auto px-5 sm:px-6'>
          <div className='min-w-full'>
            <Table>
              <TableHeader className='border-y border-gray-100 py-3 dark:border-gray-800'>
                <DataTableHeader table={table} />
              </TableHeader>
              <TableBody className='divide-y divide-gray-100 dark:divide-white/[0.05]'>
                <DataTableBody table={table} />
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <DataTablePagination table={table} />
    </div>
  );
}
