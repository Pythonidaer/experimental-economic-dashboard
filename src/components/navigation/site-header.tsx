import Link from "next/link";

import { ROUTES } from "@/lib/constants/routes";

import { MainNav } from "./main-nav";

export function SiteHeader() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-4 md:px-8">
        <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-initial">
          <Link
            className="truncate text-base font-semibold tracking-tight text-foreground hover:opacity-90 sm:text-lg"
            href={ROUTES.home}
          >
            Experimental Economic Dashboard
          </Link>
          <p className="text-xs text-muted-foreground">
            State-level economic exploration
          </p>
        </div>
        <MainNav />
      </div>
    </header>
  );
}
