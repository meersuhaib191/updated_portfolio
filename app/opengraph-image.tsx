import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mir Suhaib — Engineering Intelligent Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.35), transparent 55%), radial-gradient(circle at 100% 100%, rgba(249,115,22,0.35), transparent 55%), radial-gradient(circle at 50% 20%, rgba(15,23,42,0.95), #020617)",
          color: "#F8FAFC",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial'
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background:
                "linear-gradient(135deg, rgba(56,189,248,1), rgba(249,115,22,1))",
              boxShadow: "0 0 30px rgba(56,189,248,0.5)"
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 14,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "rgba(226,232,240,0.85)",
                fontWeight: 700
              }}
            >
              Mir Suhaib
            </div>
            <div style={{ fontSize: 16, color: "rgba(148,163,184,1)" }}>
              Machine Learning · Data Science · Full Stack
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: -1
            }}
          >
            Engineering
            <span style={{ color: "rgba(56,189,248,1)" }}> Intelligent </span>
            Systems
          </div>

          <div
            style={{
              fontSize: 20,
              color: "rgba(226,232,240,0.9)",
              maxWidth: 920,
              lineHeight: 1.45
            }}
          >
            Final-year CSE student at the University of Kashmir building AI-driven,
            industry-ready solutions.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(148,163,184,1)",
            fontSize: 14
          }}
        >
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div
              style={{
                height: 1,
                width: 96,
                background:
                  "linear-gradient(90deg, rgba(56,189,248,0.9), transparent)"
              }}
            />
            <div style={{ letterSpacing: 4, textTransform: "uppercase" }}>
              Shopian · J&amp;K · India
            </div>
          </div>
          <div style={{ letterSpacing: 4, textTransform: "uppercase" }}>
            Portfolio
          </div>
        </div>
      </div>
    ),
    size
  );
}

