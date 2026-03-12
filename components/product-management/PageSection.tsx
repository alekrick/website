"use client";

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const PageSection = ({ children, className }: PageSectionProps): JSX.Element => (
  <section className={className}>{children}</section>
);
