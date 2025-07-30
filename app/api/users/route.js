// /pages/api/forward.js

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // 🔁 URL ปลายทางที่คุณจะ forward ไป
    const targetUrl = "http://itdev.cmtc.ac.th:3000/api/users";

    // 🔫 ยิงไปยัง URL นั้น
    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}` // เพิ่มได้ถ้าจำเป็น
      },
    });

    // 📥 เอาข้อมูลที่ได้มา
    const data = await response.json();

    // ✅ ส่งกลับให้ frontend
    return res.status(200).json(data);

  } catch (error) {
    console.error("Error forwarding request:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
