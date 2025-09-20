import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Подключаем шрифт Google (можно заменить на другой)
const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Saforia Marketics",
  description:
    "Лестница роста для вашего бизнеса: от первых шагов до масштабирования. Анализ рынка, стратегия, маркетинг и продажи в единой экосистеме.",
  keywords: [
    "маркетинг",
    "стратегия",
    "бизнес",
    "Saforia",
    "консалтинг",
    "рост компании",
  ],
  openGraph: {
    title: "Saforia Marketics",
    description:
      "Лестница роста для вашего бизнеса: от первых шагов до масштабирования.",
    url: "https://saforia.ru", // 👉 поменяй на реальный домен
    siteName: "Saforia Marketics",
    images: [
      {
        url: "/background-hero.jpg",
        width: 1920,
        height: 1080,
        alt: "Saforia Marketics",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
