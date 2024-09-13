import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>;
};
