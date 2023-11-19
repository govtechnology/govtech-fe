/* eslint-disable react/prop-types */
import { Input } from "@/components/cnc/ui/input";
import { DataTableFacetedFilter } from "./DataTableFacetedFilter";
import { Button } from "@/components/cnc/ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";
import { DataTableViewOptions } from "./DataTableViewOptions";
import { skStatuses } from "../../constant/SKStatus";

export function DataTableToolbar({ table }) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Cari berdasarkan nama..."
          value={table.getColumn("nama")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("nama")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
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
