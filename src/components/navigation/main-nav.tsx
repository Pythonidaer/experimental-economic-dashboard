"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ROUTES } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

const links = [
  { href: ROUTES.home, label: "Home" },
  { href: ROUTES.dashboard, label: "Dashboard" },
] as const;

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
      <ul className="flex flex-wrap gap-4 text-sm">
        {links.map(({ href, label }) => {
          const isCurrent =
            href === ROUTES.home ? pathname === href : pathname.startsWith(href);

          return (
            <li key={href}>
              <Link
                className={cn(
                  "touch-manipulation rounded-sm px-1 py-0.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isCurrent && "font-medium text-foreground"
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
