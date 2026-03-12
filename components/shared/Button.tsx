"use client";

import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "icon";
type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  internal?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
};

type ButtonProps = BaseProps &
  Omit<JSX.IntrinsicElements["button"], "onClick" | "className"> &
  Omit<JSX.IntrinsicElements["a"], "onClick" | "className" | "href">;

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-7 py-3.5 text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-[#3b6fe8] hover:shadow-[0_10px_30px_-16px_rgba(37,99,235,0.9)]",
  secondary:
    "bg-white dark:bg-transparent text-blue-600 dark:text-[#3b6fe8] border-2 border-blue-600 dark:border-[#3b6fe8] hover:bg-blue-50 dark:hover:bg-white/5",
  ghost:
    "bg-transparent text-gray-900 dark:text-white border border-gray-300 dark:border-[#2a2a2a] hover:bg-gray-50 dark:hover:bg-white/5",
  icon:
    "p-2 rounded-xl text-gray-700 dark:text-[#d4d4d4] hover:text-blue-600 dark:hover:text-[#3b6fe8] hover:bg-gray-100 dark:hover:bg-[#1a1a1a]",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200";

const cx = (...classes: Array<string | false | null | undefined>): string =>
  classes.filter(Boolean).join(" ");

export const Button = ({
  variant = "primary",
  size = "md",
  href,
  internal,
  onClick,
  className,
  children,
  fullWidth,
  ...rest
}: ButtonProps): JSX.Element => {
  const isIcon = variant === "icon";

  const composedClassName = cx(
    baseClasses,
    !isIcon && sizeClasses[size],
    variantClasses[variant],
    fullWidth && "w-full",
    className
  );

  if (href) {
    if (internal) {
      return (
        <Link href={href} className={composedClassName} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={composedClassName}
        onClick={onClick}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={composedClassName}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

