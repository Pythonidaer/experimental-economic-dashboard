import Link from "next/link";

import { ROUTES } from "@/lib/constants/routes";

export default function Home() {
  return (
    <div className="flex min-h-0 flex-1 flex-col px-4 pb-10 pt-6 sm:items-center sm:justify-center sm:px-8 sm:pb-16 sm:pt-10 sm:text-center">
      <div className="w-full max-w-lg space-y-3 sm:mx-auto sm:space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Experimental Economic Dashboard
        </h1>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          A geospatial analytics workspace for state-level economic indicators. Open the dashboard
          for the tabbed map, table, chart, and notes experience.
        </p>
      </div>
      <Link
        className="mt-5 flex h-11 w-full max-w-sm items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 sm:mx-auto sm:mt-6 sm:h-10 sm:w-auto sm:max-w-none sm:px-6"
        href={ROUTES.dashboard}
      >
        Open dashboard
      </Link>
    </div>
  );
}
