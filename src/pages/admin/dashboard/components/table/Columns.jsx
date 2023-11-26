import { Button } from "@/components/cnc/ui/button";
import { formatDate } from "@/utils/dateFormatter";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import { skStatuses } from "../../constant/SKStatus";
import DetailCertificateModal from "../DetailCertificateModal";

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
      const id = row.original.id;

      return <DetailCertificateModal id={id} />;
    },
  },
];
