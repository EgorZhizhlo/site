"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header({ onConsultClick }: { onConsultClick: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Главная",
    "Кому мы помогаем",
    "Наши продукты",
    "Как мы работаем",
    "Почему выбирают",
    "О нас",
    "Контакты",
  ];

  // ⏳ Автозакрытие меню через 5 сек
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isMenuOpen) {
      timer = setTimeout(() => {
        setIsMenuOpen(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isMenuOpen]);

  return (
    <header className="absolute top-0 left-0 w-full bg-white/50 backdrop-blur-sm z-50 transition-all">
      {/* Контентная часть */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/saforia-logo.png"
            alt="Saforia Logo"
            width={80}
            height={40}
            style={{ height: "auto" }} // ✅ чтобы не терялся aspect ratio
            className="cursor-pointer"
          />
        </div>

        {/* Бургер */}
        <button
          className="flex flex-col justify-center items-center space-y-1 w-8 h-8 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-all ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`bg-white/80 backdrop-blur-sm border-t overflow-hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-6">
          {menuItems.map((item, index) => {
            // задержка для появления (прямой порядок) и исчезновения (обратный порядок)
            const delay = isMenuOpen
              ? index * 100
              : (menuItems.length - index) * 100;

            return (
              <a
                key={index}
                href="#"
                style={{ transitionDelay: `${delay}ms` }}
                className={`text-gray-800 font-medium hover:text-[#4338CA] transition-all duration-500 transform ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }`}
              >
                {item}
              </a>
            );
          })}

          {/* CTA кнопка */}
          <button
            onClick={onConsultClick}
            style={{
              transitionDelay: `${
                isMenuOpen ? menuItems.length * 100 : 0
              }ms`,
            }}
            className={`px-6 py-2 bg-gradient-to-r from-[#4338CA] to-[#06B6D4] text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-500 transform ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
          >
            Получить консультацию
          </button>
        </nav>
      </div>
    </header>
  );
}
