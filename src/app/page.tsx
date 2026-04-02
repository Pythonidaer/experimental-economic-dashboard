import Link from "next/link";

import { ROUTES } from "@/lib/constants/routes";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-8 text-center">
      <div className="max-w-lg space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Experimental Economic Dashboard
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          A geospatial analytics workspace for state-level economic indicators. Open the
          dashboard for the tabbed map, table, chart, and notes experience.
        </p>
      </div>
      <Link
        className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
        href={ROUTES.dashboard}
      >
        Open dashboard
      </Link>
    </div>
  );
}
