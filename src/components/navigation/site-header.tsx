import Link from "next/link";

import { ROUTES } from "@/lib/constants/routes";

import { MainNav } from "./main-nav";

export function SiteHeader() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto max-w-7xl px-3 pt-2.5 pb-3 sm:px-6 sm:py-3 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="min-w-0 pr-1 sm:max-w-md sm:pr-0">
            <Link
              className="block text-[0.9375rem] font-semibold leading-snug tracking-tight text-foreground [overflow-wrap:anywhere] hover:opacity-90 sm:text-lg sm:leading-tight"
              href={ROUTES.home}
            >
              Experimental Economic Dashboard
            </Link>
            <p className="mt-0.5 hidden text-xs text-muted-foreground sm:block">
              State-level economic exploration
            </p>
          </div>
          <MainNav />
        </div>
      </div>
    </header>
  );
}
