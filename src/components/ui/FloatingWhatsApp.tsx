"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function FloatingWhatsApp() {
  const pathname = usePathname();

  // Hide on application form to avoid distraction
  if (pathname === "/partners/apply") {
    return null;
  }

  return (
    <a
      href="https://wa.me/254792651241"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="absolute right-[calc(100%+12px)] scale-0 whitespace-nowrap rounded bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-sm transition-all group-hover:scale-100 group-hover:opacity-100">
        Chat with us
      </span>
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.996 2C6.476 2 2 6.475 2 11.996c0 1.948.514 3.829 1.487 5.485L2 22l4.639-1.423a9.993 9.993 0 005.357 1.53c5.52 0 9.996-4.476 9.996-9.996C21.992 6.475 17.516 2 11.996 2zm0 18.232c-1.642 0-3.238-.43-4.636-1.246l-.333-.198-3.447 1.057 1.077-3.364-.216-.343a8.127 8.127 0 01-1.282-4.321c0-4.505 3.666-8.17 8.17-8.17 4.505 0 8.17 3.666 8.17 8.17 0 4.505-3.666 8.17-8.17 8.17zm4.492-6.147c-.246-.123-1.458-.718-1.684-.8-.225-.082-.39-.123-.553.123-.164.246-.635.8-.779.964-.144.164-.287.184-.533.061-1.127-.563-2.316-1.397-3.2-2.505-.184-.23-.02-.355.103-.478.11-.11.246-.287.369-.431.123-.143.164-.246.246-.41.082-.164.041-.307-.02-.43-.062-.123-.554-1.334-.759-1.826-.2-.482-.405-.415-.555-.423h-.471c-.164 0-.43.062-.656.308-.226.246-.861.841-.861 2.051 0 1.21 .882 2.379 1.005 2.544.123.164 1.734 2.646 4.198 3.652 1.346.549 2.155.495 2.943.433.881-.07 1.458-.595 1.664-1.169.205-.574.205-1.066.143-1.169-.062-.103-.226-.164-.472-.287z" />
      </svg>
    </a>
  );
}
