"use client";

export default function About() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center text-center px-6"
      style={{ backgroundImage: "url('/background-indentation.jpg')" }}
    >
      {/* градиент только сверху — как в Hero, но зеркально */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto py-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#4338CA] mb-8">
          Команда Saforia Marketics
        </h2>

        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          <strong>Saforia Marketics</strong> — это аналитический центр, объединяющий
          опыт в стратегии, маркетинге и управлении ростом.  
          Мы создаём готовые решения, которые помогают компаниям принимать взвешенные решения, снижать риски и находить новые источники роста.  
          Наша миссия — превратить аналитику и стратегию в практические шаги, которые работают здесь и сейчас.
        </p>
      </div>
    </section>
  );
}
