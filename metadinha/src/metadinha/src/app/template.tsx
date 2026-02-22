"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);

    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className={`wave-container ${animate ? "wave-active" : ""}`}>
      {children}
    </div>
  );
}