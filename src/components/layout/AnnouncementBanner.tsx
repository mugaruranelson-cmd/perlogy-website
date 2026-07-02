"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-brand-blue text-white relative z-[60] flex items-center justify-center px-4 py-3 sm:px-6 lg:px-8">
      <p className="text-center text-sm font-medium">
        Perlogy Technologies Appoints Franklin Ogonji as Managing Director –{" "}
        <Link href="/news/leadership-update" className="underline font-bold hover:text-brand-light-blue-bg">
          Read the Press Release
        </Link>
      </p>
      <button
        type="button"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-brand-blue-dark rounded-md transition-colors"
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss"
      >
        <X size={16} className="text-white" />
      </button>
    </div>
  );
}
