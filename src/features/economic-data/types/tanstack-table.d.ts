import type { RowData } from "@tanstack/react-table";

declare module "@tanstack/react-table" {
  /* eslint-disable @typescript-eslint/no-unused-vars -- mirrors TanStack `ColumnMeta` generics */
  interface ColumnMeta<TData extends RowData, TValue> {
    /** Cell text alignment for MVP table styling */
    align?: "left" | "right";
  }
  /* eslint-enable @typescript-eslint/no-unused-vars */
}
