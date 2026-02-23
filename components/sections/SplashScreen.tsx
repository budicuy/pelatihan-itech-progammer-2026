"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [phase, setPhase] = useState<"logo" | "text" | "exit">("logo");

  useEffect(() => {
    // Phase 1: Logo appears (already showing)
    const textTimer = setTimeout(() => setPhase("text"), 600);
    const exitTimer = setTimeout(() => setPhase("exit"), 2200);
    const finishTimer = setTimeout(() => onFinish(), 2800);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className={`splash-screen ${phase === "exit" ? "splash-exit" : ""}`}>
      {/* Background Effects */}
      <div className="splash-glow splash-glow-1" />
      <div className="splash-glow splash-glow-2" />

      {/* Content */}
      <div className="splash-content">
        {/* Logo */}
        <div
          className={`splash-logo ${phase !== "logo" ? "splash-logo-up" : ""}`}
        >
          <Image
            src="/logo-itech.svg"
            alt="Itech Poliban"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </div>

        {/* Text */}
        <div
          className={`splash-text ${phase === "text" || phase === "exit" ? "splash-text-visible" : ""}`}
        >
          <h1 className="splash-title">
            <span className="text-white">ITECH</span>{" "}
            <span className="text-accent">POLIBAN</span>
          </h1>
          <div className="splash-divider" />
          <p className="splash-subtitle">Pelatihan Programmer 2026</p>
        </div>

        {/* Loading Bar */}
        <div
          className={`splash-loader ${phase === "text" || phase === "exit" ? "splash-loader-visible" : ""}`}
        >
          <div className="splash-loader-track">
            <div className="splash-loader-fill" />
          </div>
        </div>
      </div>

      {/* Particles */}
      <div className="splash-particles">
        {[
          { l: "8%", t: "15%", dd: "0.2s", du: "3.5s" },
          { l: "22%", t: "72%", dd: "1.1s", du: "2.8s" },
          { l: "35%", t: "28%", dd: "0.5s", du: "4.2s" },
          { l: "48%", t: "85%", dd: "1.7s", du: "3.1s" },
          { l: "62%", t: "10%", dd: "0.3s", du: "4.6s" },
          { l: "75%", t: "55%", dd: "1.4s", du: "2.5s" },
          { l: "88%", t: "38%", dd: "0.9s", du: "3.8s" },
          { l: "15%", t: "48%", dd: "1.8s", du: "2.3s" },
          { l: "42%", t: "62%", dd: "0.7s", du: "4.1s" },
          { l: "55%", t: "22%", dd: "1.3s", du: "3.4s" },
          { l: "68%", t: "78%", dd: "0.1s", du: "2.9s" },
          { l: "82%", t: "8%", dd: "1.6s", du: "4.4s" },
          { l: "5%", t: "90%", dd: "0.6s", du: "3.2s" },
          { l: "30%", t: "42%", dd: "1.2s", du: "2.6s" },
          { l: "92%", t: "65%", dd: "0.4s", du: "3.9s" },
        ].map((p) => (
          <div
            key={`${p.l}-${p.t}`}
            className="splash-particle"
            style={{
              left: p.l,
              top: p.t,
              animationDelay: p.dd,
              animationDuration: p.du,
            }}
          />
        ))}
      </div>
    </div>
  );
}
