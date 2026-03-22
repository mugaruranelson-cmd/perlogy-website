import React from "react";

export function AuthorityBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 bg-[#F25C1A] text-white
        text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${className}`}
    >
      <span className="text-[8px]">★</span>
      Authorised representative
    </span>
  )
}
