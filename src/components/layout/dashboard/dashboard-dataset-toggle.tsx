"use client";

import { cn } from "@/lib/utils";

export type DashboardDataset = "exports" | "labor";

type DashboardDatasetToggleProps = {
  value: DashboardDataset;
  onChange: (value: DashboardDataset) => void;
  idPrefix: string;
  className?: string;
  /** `bar`: no top margin, tighter grouping for horizontal control rows */
  variant?: "default" | "bar";
  /** Smaller pills for dense toolbars (e.g. mobile expanded chart). */
  size?: "default" | "compact";
};

export function DashboardDatasetToggle({
  value,
  onChange,
  idPrefix,
  className,
  variant = "default",
  size = "default",
}: DashboardDatasetToggleProps) {
  const labelId = `${idPrefix}-dataset-label`;
  const groupId = `${idPrefix}-dataset`;
  const isBar = variant === "bar";
  const compact = size === "compact";

  return (
    <div className={cn(!isBar && "mt-4", className)}>
      <p
        className={cn(
          isBar ? "sr-only" : "text-sm font-medium text-foreground",
        )}
        id={labelId}
      >
        Data
      </p>
      <div
        aria-labelledby={labelId}
        className={cn(
          "inline-flex flex-wrap",
          compact ? "gap-1" : "gap-2",
          !isBar && "mt-2",
        )}
        id={groupId}
        role="radiogroup"
      >
        <DatasetOption
          checked={value === "exports"}
          compact={compact}
          id={`${idPrefix}-dataset-exports`}
          label="Exports"
          onSelect={() => onChange("exports")}
        />
        <DatasetOption
          checked={value === "labor"}
          compact={compact}
          id={`${idPrefix}-dataset-labor`}
          label="Labor"
          onSelect={() => onChange("labor")}
        />
      </div>
    </div>
  );
}

type DatasetOptionProps = {
  id: string;
  label: string;
  checked: boolean;
  compact?: boolean;
  onSelect: () => void;
};

function DatasetOption({ id, label, checked, compact, onSelect }: DatasetOptionProps) {
  return (
    <button
      aria-checked={checked}
      className={cn(
        "inline-flex items-center justify-center border font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        compact
          ? "h-8 min-h-8 min-w-[4.25rem] rounded-md px-2.5 text-xs"
          : "min-h-10 min-w-[5.5rem] rounded-lg px-3 py-2 text-sm",
        checked
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground hover:bg-muted/80",
      )}
      id={id}
      role="radio"
      type="button"
      onClick={onSelect}
    >
      {label}
    </button>
  );
}
