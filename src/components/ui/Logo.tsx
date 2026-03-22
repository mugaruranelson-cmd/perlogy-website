import React from "react";

interface LogoProps {
  className?: string;
  width?: number;
  showSubtext?: boolean;
}

export default function Logo({
  className = "",
  width = 220,
  showSubtext = true,
}: LogoProps) {
  return (
    <img
      src="/perlogy_logo.svg"
      alt="Perlogy Technologies Logo"
      width={width}
      className={className}
      style={{ height: "auto", display: "block" }}
    />
  );
}
