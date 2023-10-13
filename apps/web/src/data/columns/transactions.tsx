'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from '@/components/ui/custom/tables/data-table-column-header';
import moment from 'moment';
import { Check, X } from 'lucide-react';
import { Transaction } from '@/types/primitives/Transaction';
import { Translate } from 'next-translate';

export const transactionColumns = (t: Translate): ColumnDef<Transaction>[] => [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={t('id')} />
    ),
    cell: ({ row }) => (
      <div className="line-clamp-1 min-w-[8rem]">{row.getValue('id')}</div>
    ),
  },
  {
    accessorKey: 'category',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={t('category')} />
    ),
    cell: ({ row }) => (
      <div className="min-w-[8rem]">{row.getValue('category') || '-'}</div>
    ),
  },
  {
    accessorKey: 'wallet',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={t('wallet')} />
    ),
    cell: ({ row }) => (
      <div className="min-w-[8rem]">{row.getValue('wallet') || '-'}</div>
    ),
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={t('amount')} />
    ),
    cell: ({ row }) => (
      <div className="min-w-[8rem]">
        {Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
        }).format(row.getValue('amount'))}
      </div>
    ),
  },
  {
    accessorKey: 'description',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={t('description')} />
    ),
    cell: ({ row }) => (
      <div className="min-w-[8rem]">{row.getValue('description') || '-'}</div>
    ),
  },
  {
    accessorKey: 'report_opt_in',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={t('report_opt_in')} />
    ),
    cell: ({ row }) => (
      <div>{row.getValue('report_opt_in') ? <Check /> : <X />}</div>
    ),
  },
  {
    accessorKey: 'taken_at',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={t('taken_at')} />
    ),
    cell: ({ row }) => (
      <div className="min-w-[8rem]">
        {row.getValue('taken_at')
          ? moment(row.getValue('taken_at')).format('DD/MM/YYYY, HH:mm:ss')
          : '-'}
      </div>
    ),
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={t('created_at')} />
    ),
    cell: ({ row }) => (
      <div className="min-w-[8rem]">
        {row.getValue('created_at')
          ? moment(row.getValue('created_at')).format('DD/MM/YYYY, HH:mm:ss')
          : '-'}
      </div>
    ),
  },
  //   {
  //     id: 'actions',
  //     cell: ({ row }) => <SecretRowActions row={row} />,
  //   },
];
