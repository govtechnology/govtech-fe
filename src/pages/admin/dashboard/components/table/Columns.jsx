import { Button } from "@/components/cnc/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/cnc/ui/dropdown-menu";
import { formatDate } from "@/utils/dateFormatter";
import { MoreHorizontal } from "lucide-react";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import { skStatuses } from "../../constant/SKStatus";

export const columns = [
  {
    id: "nama",
    accessorKey: "skData.nama",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nama Lengkap" />
    ),
  },
  {
    accessorKey: "skType",
    header: "Jenis Surat",
  },
  {
    accessorKey: "skStatus",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = skStatuses.find(
        (status) => status.value === row.getValue("skStatus")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "requestDate",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Tanggal & Waktu Permintaan"
      />
    ),
    cell: ({ row }) => {
      const date = row.getValue("requestDate");
      return <div>{formatDate(date)}</div>;
    },
  },
  {
    header: "Aksi",
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
