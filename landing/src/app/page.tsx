"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ConsultationModal from "@/components/ConsultationModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900">
      {/* 🔝 Навигация */}
      <Header onConsultClick={() => setIsModalOpen(true)} />

      {/* 1️⃣ Hero Section */}
      <Hero onConsultClick={() => setIsModalOpen(true)} />

      {/* 💬 Модалка */}
      {isModalOpen && <ConsultationModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
