"use client";

import { useEffect, useRef, useState } from "react";
import IMask from "imask";

export default function ConsultationModal({ onClose }: { onClose: () => void }) {
  const phoneRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (phoneRef.current) {
      IMask(phoneRef.current, {
        mask: "+{7} (000) 000-00-00",
      });
    }
  }, []);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const surname = formData.get("surname")?.toString().trim() || "";
    const phoneValue = phoneRef.current?.value || "";
    const telegram = formData.get("telegram")?.toString().trim() || "";
    const whatsapp = formData.get("whatsapp")?.toString().trim() || "";

    const newErrors: { phone?: string; email?: string } = {};
    if (phoneValue.replace(/\D/g, "").length < 11) {
      newErrors.phone = "Введите корректный номер телефона";
    }
    if (!validateEmail(email)) {
      newErrors.email = "Введите корректный email";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);
      const res = await fetch("/api/new-client", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          surname,
          phone: phoneValue,
          email,
          telegram,
          whatsapp,
        }),
      });

      if (!res.ok) throw new Error("Ошибка отправки");

      setSuccess(true);
      // очистка формы
      if (phoneRef.current) phoneRef.current.value = "";
      setEmail("");
      setErrors({});
      form.reset();

      // закрыть через 2 секунды после успеха
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error(err);
      alert("Не удалось отправить заявку, попробуйте позже");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative animate-fadeInUp">
        {/* Кнопка закрытия */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold text-[#4338CA] mb-6">
          Получить консультацию
        </h3>

        {success ? (
          <p className="text-green-600 font-semibold text-center">
            Заявка успешно отправлена 🎉
          </p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
            />
            <input
              type="text"
              name="surname"
              placeholder="Фамилия"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
            />
            <div>
              <input
                ref={phoneRef}
                type="tel"
                placeholder="Телефон *"
                required
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-[#4F46E5]"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-[#4F46E5]"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <input
              type="text"
              name="telegram"
              placeholder="Telegram (если имеется)"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
            />
            <input
              type="text"
              name="whatsapp"
              placeholder="WhatsApp (если имеется)"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
            />

            {/* Кнопка отправки */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-to-r from-[#4338CA] to-[#06B6D4] text-white font-semibold rounded-xl py-3 shadow-lg transition-transform ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:scale-105"
              }`}
            >
              {loading ? "Отправка..." : "Отправить заявку"}
            </button>
          </form>
        )}
      </div>

      {/* Анимация */}
      <style jsx>{`
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
