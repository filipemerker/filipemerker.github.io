"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Uses", href: "/uses" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center gap-8 py-4 absolute top-4 md:left-14 md:translate-x-0 left-1/2 -translate-x-1/2 z-10 bg-white px-6">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
