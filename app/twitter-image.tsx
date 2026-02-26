import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mir Suhaib — Engineering Intelligent Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background:
            "radial-gradient(circle at 15% 10%, rgba(56,189,248,0.35), transparent 52%), radial-gradient(circle at 90% 90%, rgba(249,115,22,0.35), transparent 52%), linear-gradient(180deg, #020617, #050509)",
          color: "#F8FAFC",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial'
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "rgba(148,163,184,1)",
              fontWeight: 700
            }}
          >
            Mir Suhaib
          </div>
          <div style={{ fontSize: 64, lineHeight: 1.02, fontWeight: 900 }}>
            Engineering{" "}
            <span style={{ color: "rgba(56,189,248,1)" }}>Intelligent</span>{" "}
            Systems
          </div>
          <div style={{ fontSize: 22, color: "rgba(226,232,240,0.9)" }}>
            ML · Data Science · Full Stack Development
          </div>
        </div>
      </div>
    ),
    size
  );
}

