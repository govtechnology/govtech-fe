/* eslint-disable react/prop-types */
import { DataTableFacetedFilter } from "./UserDataTableFacetedFilter";
import { Button } from "@/components/cnc/ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";
import { DataTableViewOptions } from "./UserDataTableViewOptions";
import { skStatuses } from "@/constant/skStatus";
import { skTypes } from "@/constant/skType";

export function DataTableToolbar({ table }) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {table.getColumn("skType") && (
          <DataTableFacetedFilter
            column={table.getColumn("skType")}
            title="Jenis Surat"
            options={skTypes}
          />
        )}
        {table.getColumn("skStatus") && (
          <DataTableFacetedFilter
            column={table.getColumn("skStatus")}
            title="Status"
            options={skStatuses}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Hapus filter
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
