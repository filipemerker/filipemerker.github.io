import { ReactNode } from "react";

export function BaseCard({
  children,
  style,
}: {
  children?: ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="w-full h-full p-8 bg-cover bg-center rounded-2xl"
      style={style}
    >
      {children}
    </div>
  );
}

export const CardTypeScript = (
  <BaseCard style={{ backgroundImage: "url(/site1.png)" }} />
);

export const CardReactNext = (
  <BaseCard style={{ backgroundImage: "url(/site2.png)" }} />
);

export const CardNodeAPI = (
  <BaseCard style={{ backgroundImage: "url(/site3.png)" }} />
);
