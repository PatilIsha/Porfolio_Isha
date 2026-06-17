import { ImageResponse } from "next/og";

export const alt = "Isha Patil - Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d1224 0%, #0a0d37 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, color: "#ec4899", fontWeight: 700, letterSpacing: 4 }}>
          &lt;/&gt;
        </div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 800, marginTop: 16 }}>
          Isha Patil
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 600,
            marginTop: 8,
            color: "#16f2b3",
            letterSpacing: 2,
          }}
        >
          Full Stack Developer
        </div>
        <div style={{ display: "flex", fontSize: 26, marginTop: 28, color: "#9ca3af" }}>
          MERN Stack · React · Next.js · Node.js · Spring Boot
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 10,
            background: "linear-gradient(90deg, #ec4899, #8b5cf6, #16f2b3)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
