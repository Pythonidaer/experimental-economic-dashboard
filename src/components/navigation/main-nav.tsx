"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ROUTES } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

const links = [
  { href: ROUTES.home, label: "Home" },
  { href: ROUTES.dashboard, label: "Dashboard" },
  { href: ROUTES.glossary, label: "Glossary" },
  { href: ROUTES.topics, label: "Topics" },
] as const;

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="w-full sm:w-auto">
      <ul className="grid w-full grid-cols-2 gap-x-2 gap-y-1 sm:flex sm:w-auto sm:flex-wrap sm:justify-end sm:gap-x-4 sm:gap-y-1">
        {links.map(({ href, label }) => {
          const isCurrent =
            href === ROUTES.home ? pathname === href : pathname.startsWith(href);

          return (
            <li key={href} className="min-w-0 sm:w-auto">
              <Link
                className={cn(
                  "touch-manipulation block w-full rounded-md px-3 py-2 text-center text-sm transition-colors sm:w-auto sm:px-1 sm:py-1 sm:text-left",
                  "text-muted-foreground hover:bg-muted/80 hover:text-foreground sm:hover:bg-transparent",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:rounded-sm",
                  isCurrent && "bg-muted font-medium text-foreground sm:bg-transparent",
                )}
                href={href}
                aria-current={isCurrent ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
