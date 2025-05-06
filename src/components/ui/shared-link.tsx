import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SharedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export const SharedLink: FC<SharedLinkProps> = ({
  href,
  children,
  className,
  external = false,
}) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "relative inline-flex items-center text-blue-500 transition-colors duration-200",
        "hover:text-blue-600",
        "after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-blue-500 after:transition-all after:duration-200",
        "hover:after:w-full",
        className
      )}
    >
      {children}
      {external && (
        <svg
          className="ml-1 h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      )}
    </a>
  );
};
