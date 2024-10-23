"use client";
import Importance from "@/components/landing/Importance";
import LandingMain from "@/components/landing/LandingMain";
import { useState } from "react";

export default function Home() {
  const [isThai, setIsThai] = useState(true);

  const toggleLanguage = () => {
    setIsThai(!isThai);
  };

  return (
    <main className="min-h-screen overflow-y-auto">
      <div className="min-h-screen md:h-screen md:snap-start">
        <LandingMain />
      </div>
      <div className="min-h-screen md:h-screen md:snap-start">
        <Importance/>
      </div>
    </main>
  );
}