import { formatDate } from "@/utils/dateFormatter";
import { DataTableColumnHeader } from "./AdminDataTableColumnHeader";
import DetailCertificateModal from "../DetailCertificateModal";
import { skStatuses } from "@/constant/skStatus";
import { Badge } from "@/components/cnc/ui/badge";
import { skTypes } from "@/constant/skType";

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
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Jenis Surat" />
    ),
    cell: ({ row }) => {
      const skType = skTypes.find(
        (type) => type.value === row.getValue("skType")
      );

      if (!skType) {
        return null;
      }

      return <span>{skType.label}</span>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
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

      return <Badge>{status.label}</Badge>;
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
