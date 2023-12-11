import { formatDate } from "@/utils/dateFormatter";
import { DataTableColumnHeader } from "./UserDataTableColumnHeader";
import { skStatuses } from "@/constant/skStatus";
import UserCertificateDownloadButton from "../components/UserCertificateDownloadButton";
import { skTypes } from "@/constant/skType";
import { Badge } from "@/components/cnc/ui/badge";
import DetailCertificateModal from "../components/DetailCertificateModal";

export const columns = [
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

      return (
        <div className="flex w-[100px] items-center">
          {skType.icon && (
            <skType.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{skType.label}</span>
        </div>
      );
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
    accessorKey: "approvedDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tanggal & Waktu Diterima" />
    ),
    cell: ({ row }) => {
      const date = row.getValue("approvedDate");
      return date !== null ? (
        <span>{formatDate(date)}</span>
      ) : (
        <span>Tidak Tersedia</span>
      );
    },
  },
  {
    header: "Aksi",
    id: "actions",
    cell: ({ row }) => {
      const rowData = row.original;

      return (
        <div className="flex gap-2">
          <DetailCertificateModal id={rowData.id} />
          {rowData.skDir !== null ? (
            <UserCertificateDownloadButton skDir={rowData.skDir} />
          ) : null}
        </div>
      );
    },
  },
];
