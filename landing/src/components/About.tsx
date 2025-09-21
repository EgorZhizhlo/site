"use client";

export default function About() {
  return (
    <section className="relative flex items-center justify-center w-full text-center px-6 overflow-hidden">
      {/* Фон фиксированной высоты */}
      <div
        className="absolute top-0 left-0 w-full h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/background-indentation1.jpg')" }}
      />
      {/* Градиенты поверх фона */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-white" />

      {/* Контент */}
      <div className="relative z-10 max-w-5xl mx-auto py-20 mt-[35vh]">
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-8 drop-shadow-md">
          Команда <span className="text-[#06B6D4]">Saforia Marketics</span>
        </h2>

        <p className="text-xl md:text-3xl leading-relaxed text-gray-800">
          <strong className="text-blue-900">Saforia Marketics</strong> — это{" "}
          <span className="text-[#06B6D4] font-semibold">аналитический центр</span>, объединяющий опыт в{" "}
          <span className="text-[#06B6D4] font-semibold">
            стратегии, маркетинге и управлении ростом
          </span>
          .  
          Мы создаём готовые решения, которые помогают компаниям{" "}
          <span className="text-[#06B6D4] font-semibold">принимать взвешенные решения</span>, снижать риски и находить новые источники роста.  
          Наша миссия —{" "}
          <span className="text-blue-900 font-semibold">превратить аналитику и стратегию</span>{" "}
          в{" "}
          <span className="text-[#06B6D4] font-semibold">практические шаги</span>, которые работают здесь и сейчас.
        </p>
      </div>
    </section>
  );
}
