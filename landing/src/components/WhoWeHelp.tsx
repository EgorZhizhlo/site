"use client";

import { motion } from "framer-motion";

export default function WhoWeHelp() {
  const cards = [
    {
      title: "Saforia Start 🚀",
      text: (
        <>
          Для компаний, которые выходят на рынок или начинают новый проект.  
          Ключевая задача — получить{" "}
          <span className="text-[#4338CA] font-semibold">чёткое понимание рынка и клиентов</span>,  
          выстроить базовую модель продаж и заложить основу роста.
        </>
      ),
      accent: (
        <>
          Мы помогаем{" "}
          <span className="text-[#4338CA] font-semibold">структурировать процессы</span> и превратить идеи в{" "}
          <span className="text-[#06B6D4] font-semibold">работающую бизнес-модель</span>.
        </>
      ),
    },
    {
      title: "Saforia Growth 📈",
      text: (
        <>
          Для компаний, которые развиваются, но сталкиваются с{" "}
          <span className="text-[#4338CA] font-semibold">хаотичным маркетингом и отсутствием стратегии</span>.  
          Продажи зависят от случайностей, а потенциал бизнеса не используется.
        </>
      ),
      accent: (
        <>
          Мы создаём{" "}
          <span className="text-[#06B6D4] font-semibold">стратегию роста</span>,  
          оптимизируем бизнес-модель и запускаем{" "}
          <span className="text-[#4338CA] font-semibold">эффективный маркетинг</span>.
        </>
      ),
    },
    {
      title: "Saforia Edge 🏆",
      text: (
        <>
          Для бизнеса, готового к{" "}
          <span className="text-[#06B6D4] font-semibold">масштабированию</span> и выходу в новые ниши.  
          Важно удержать{" "}
          <span className="text-[#4338CA] font-semibold">контроль над процессами</span> и управлять рисками.
        </>
      ),
      accent: (
        <>
          Мы сопровождаем запуск{" "}
          <span className="text-[#06B6D4] font-semibold">новых направлений</span> и обеспечиваем{" "}
          <span className="text-[#4338CA] font-semibold">системное управление ростом</span>.
        </>
      ),
    },
  ];

  return (
    <section className="relative px-8 lg:px-16 pt-[12vh] pb-24 overflow-hidden">
      {/* Фон */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.7)),
            url('/f1.jpg')
          `,
        }}
      />
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white" />

      {/* Контент */}
      <div className="relative z-10 max-w-10xl mx-auto flex flex-col gap-20">
        {/* Заголовок */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-extrabold leading-snug"
        >
          <span className="text-[#4338CA]">Мы разрабатываем</span>{" "}
          <span className="text-[#06B6D4]">стратегии роста</span>{" "}
          <span className="text-[#4338CA]">для компаний на разных этапах развития</span>
        </motion.h2>

        {/* Карточки */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 h-full flex flex-col justify-between p-10 rounded-2xl shadow-lg border border-gray-200 
                         hover:shadow-2xl hover:-translate-y-2 transition-transform transition-shadow duration-300 backdrop-blur-sm"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#4F46E5] mb-5 text-center">
                  {card.title}
                </h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed text-justify tracking-wide">
                  {card.text}
                </p>
              </div>
              <p className="text-lg text-[#06B6D4] font-medium leading-relaxed mt-auto text-justify">
                {card.accent}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
