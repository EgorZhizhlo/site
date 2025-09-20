"use client";

import { motion } from "framer-motion";

export default function WhoWeHelp() {
  const cards = [
    {
      title: "Saforia Start 🚀",
      text: "Для тех, кто делает первые шаги в бизнесе или выходит в новую сферу. Вам нужна ясность: понять рынок, конкурентов и клиентов, сформировать структуру продаж и основу для роста.",
      accent: "Мы помогаем убрать хаос и превратить идеи в работающую бизнес-модель.",
    },
    {
      title: "Saforia Growth 📈",
      text: "Для компаний, которые уже развиваются, но буксуют без системного подхода. Часто есть оборот, но нет чёткой стратегии, маркетинг работает отрывочно, а продажи зависят от случайностей.",
      accent: "Мы выстраиваем стратегию, оптимизируем модель и запускаем маркетинг, который приносит результат.",
    },
    {
      title: "Saforia Edge 🏆",
      text: "Для бизнеса, готового к следующему шагу — масштабированию и выходу в новые ниши. Здесь важно не потерять контроль над процессами, видеть риски и понимать тренды рынка.",
      accent: "Мы помогаем запускать новые направления, контролировать рынок и управлять ростом системно.",
    },
  ];

  return (
    <section className="relative bg-[#f7f7f7] px-6 text-center overflow-hidden pt-[20vh] pb-48">
      {/* Волна сверху */}
      <motion.img
        src="/wave.png"
        alt="wave top"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-auto rotate-180 opacity-50 blur-md z-0 origin-center"
      />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative text-3xl md:text-4xl font-extrabold text-[#4338CA] mb-16 z-10"
      >
        Мы создаём стратегии роста для компаний на разных этапах развития
      </motion.h2>

      <div className="relative grid gap-10 md:gap-12 md:grid-cols-3 max-w-7xl mx-auto z-10 mb-16">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-[#4F46E5] mb-3">
              {card.title}
            </h3>
            <p className="text-gray-600 mb-3">{card.text}</p>
            <p className="text-[#06B6D4] font-medium">{card.accent}</p>
          </motion.div>
        ))}
      </div>

      {/* Волна снизу */}
      <motion.img
        src="/wave-m.png"
        alt="wave bottom"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-auto opacity-50 blur-md z-0 origin-center"
      />
    </section>
  );
}
