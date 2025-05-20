import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "@/components/ui/data-table-view-options";
import { DataTableFacetedFilter } from "@/components/ui/data-table-faceted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterableColumns?: {
    id: string;
    title: string;
    options: {
      value: string;
      label: string;
    }[];
  }[];
  searchableColumns?: {
    id: string;
    title: string;
  }[];
  deleteRow?: (id: string) => void;
}

export function DataTableToolbar<TData>({
  table,
  filterableColumns = [],
  searchableColumns = [],
  deleteRow,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const selectedRows = table.getFilteredSelectedRowModel().rows;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {searchableColumns.length > 0 &&
          searchableColumns.map(
            (column) =>
              table.getColumn(column.id) && (
                <Input
                  key={column.id}
                  placeholder={`Filter ${column.title}...`}
                  value={
                    (table.getColumn(column.id)?.getFilterValue() as string) ??
                    ""
                  }
                  onChange={(event) =>
                    table
                      .getColumn(column.id)
                      ?.setFilterValue(event.target.value)
                  }
                  className="h-8 w-[150px] lg:w-[250px]"
                />
              )
          )}
        {filterableColumns.length > 0 &&
          filterableColumns.map(
            (column) =>
              table.getColumn(column.id) && (
                <DataTableFacetedFilter
                  key={column.id}
                  column={table.getColumn(column.id)}
                  title={column.title}
                  options={column.options}
                />
              )
          )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {selectedRows.length > 0 && deleteRow && (
          <Button
            variant="destructive"
            size="sm"
            onClick={() => {
              selectedRows.forEach((row) => {
                const id = (row.original as any).id;
                if (id) deleteRow(id);
              });
              table.resetRowSelection();
            }}
          >
            Delete {selectedRows.length} selected
          </Button>
        )}
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
