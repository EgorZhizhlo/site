import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const token = process.env.TODOIST_API_TOKEN;

    if (!token) {
      return NextResponse.json({ error: "No Todoist token" }, { status: 500 });
    }

    // время UTC+3
    const createdAt = new Date();
    const offsetMs = 3 * 60 * 60 * 1000; // +3 часа
    const utc3 = new Date(createdAt.getTime() + offsetMs);
    const formattedDate = utc3.toISOString().replace("T", " ").split(".")[0];

    const response = await fetch("https://api.todoist.com/rest/v2/tasks", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `Новая заявка от ${body.name} ${body.surname}`,
        description: `Телефон: ${body.phone}
Email: ${body.email}
Telegram: ${body.telegram || "-"}
WhatsApp: ${body.whatsapp || "-"}
⏰ Время прихода: ${formattedDate}`,
        project_id: process.env.TODOIST_CLIENTS_PROJECT_ID,
        section_id: process.env.TODOIST_CLIENTS_SECTION_ID,
        priority: 4, // 🔴 высокий приоритет → выше в списке
        due_string: "today", // ставим на сегодня
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Todoist error:", errorText);
      return NextResponse.json(
        { error: "Ошибка при создании задачи в Todoist", details: errorText },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
