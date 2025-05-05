import React, { memo } from "react";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  /** animation duration in seconds */
  speed?: number;
}

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#67e8f9", "#6c99e8", "#93c5fd", "#818cf8"],
    speed = 10,
  }: AuroraTextProps) => {
    const gradientStyle: React.CSSProperties = {
      backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${
        colors[0]
      })`,
      backgroundSize: "200% 200%",
      backgroundPosition: "0% 0%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animation: `aurora ${speed}s linear infinite`,
      willChange: "background-position",
    };

    return (
      <span className={`relative inline-block ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          style={gradientStyle}
          className="font-bold relative"
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    );
  }
);

AuroraText.displayName = "AuroraText";
