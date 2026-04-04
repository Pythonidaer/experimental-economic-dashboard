"use client";

import { cn } from "@/lib/utils";

export type DashboardDataset = "trade" | "labor";

type DashboardDatasetToggleProps = {
  value: DashboardDataset;
  onChange: (value: DashboardDataset) => void;
  idPrefix: string;
  className?: string;
};

export function DashboardDatasetToggle({
  value,
  onChange,
  idPrefix,
  className,
}: DashboardDatasetToggleProps) {
  const labelId = `${idPrefix}-dataset-label`;
  const groupId = `${idPrefix}-dataset`;

  return (
    <div className={cn("mt-4", className)}>
      <p className="text-sm font-medium text-foreground" id={labelId}>
        Data
      </p>
      <div
        aria-labelledby={labelId}
        className="mt-2 inline-flex flex-wrap gap-2"
        id={groupId}
        role="radiogroup"
      >
        <DatasetOption
          checked={value === "trade"}
          id={`${idPrefix}-dataset-trade`}
          label="Trade"
          onSelect={() => onChange("trade")}
        />
        <DatasetOption
          checked={value === "labor"}
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
  onSelect: () => void;
};

function DatasetOption({ id, label, checked, onSelect }: DatasetOptionProps) {
  return (
    <button
      aria-checked={checked}
      className={cn(
        "inline-flex min-h-10 min-w-[5.5rem] items-center justify-center rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
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
