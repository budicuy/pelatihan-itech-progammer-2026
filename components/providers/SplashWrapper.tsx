"use client";

import { useCallback, useState } from "react";
import SplashScreen from "@/components/sections/SplashScreen";

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  const handleFinish = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleFinish} />}
      <div
        className={`transition-opacity duration-500 ${showSplash ? "opacity-0" : "opacity-100"}`}
      >
        {children}
      </div>
    </>
  );
}
