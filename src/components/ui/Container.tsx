import type { ReactNode } from "react";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "default" | "wide" | "narrow";
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
}

const sizeMap = {
  default: "max-w-[1400px]",
  wide: "max-w-[1600px]",
  narrow: "max-w-[960px]",
};

export function Container({
  children,
  size = "default",
  className = "",
  as: Tag = "div",
  ...rest
}: ContainerProps) {
  const Tag2 = Tag as unknown as React.ElementType;
  return (
    <Tag2
      className={`mx-auto w-full ${sizeMap[size]} px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 ${className}`}
      {...rest}
    >
      {children}
    </Tag2>
  );
}
