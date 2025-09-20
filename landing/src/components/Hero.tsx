"use client";

export default function Hero({ onConsultClick }: { onConsultClick: () => void }) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center h-screen w-full bg-cover bg-center mt-0"
        style={{ backgroundImage: "url('/background-hero.jpg')" }}
      >
        {/* Градиентный переход вниз */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white" />

        <div className="relative z-10 text-center max-w-4xl px-0">
          <h1 className="text-5xl md:text-7xl font-black text-[#3730A3] mb-6 animate-fadeIn">
            Saforia Marketics
          </h1>

          <h2 className="text-2xl md:text-4xl italic text-[#2a2485] mb-8 animate-slideUp w-[98%] mx-auto">
            Лестница роста для вашего бизнеса: от первых шагов до масштабирования
          </h2>

          <button
            onClick={onConsultClick}
            className="mt-2 px-6 py-3 text-xl bg-gradient-to-r from-[#4338CA] to-[#06B6D4] text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            Получить консультацию
          </button>
        </div>
      </section>

      {/* Анимации */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out;
        }
        .animate-slideUp {
          animation: slideUp 1.2s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
