import { ImageResponse } from "next/og";
import { brand, OG_SIZE, loadFonts } from "./_lib/og";

export const runtime = "edge";
export const alt = "Ayodeji Atanda - Software Engineer Portfolio";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadFonts();
  const techStack = ["React", "TypeScript", "Next.js", "Web3"];

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: brand.bg,
          padding: "60px 80px",
          fontFamily: "Outfit",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Emerald accent bar at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "240px",
            height: "4px",
            backgroundColor: brand.accent,
          }}
        />

        {/* Subtle decorative letter */}
        <div
          style={{
            position: "absolute",
            right: "-20px",
            bottom: "-60px",
            display: "flex",
            fontSize: "420px",
            fontWeight: 700,
            color: "rgba(30, 41, 59, 0.04)",
            lineHeight: 1,
            letterSpacing: "-0.05em",
          }}
        >
          A
        </div>

        {/* Label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: brand.accent,
            }}
          />
          <span
            style={{
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.3em",
              color: brand.textMuted,
            }}
          >
            PORTFOLIO
          </span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            gap: "0px",
          }}
        >
          <span
            style={{
              fontSize: "92px",
              fontWeight: 700,
              color: brand.text,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            Ayodeji
          </span>
          <span
            style={{
              fontSize: "92px",
              fontWeight: 700,
              color: brand.text,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            Atanda
          </span>

          {/* Accent line + subtitle */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginTop: "28px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "40px",
                height: "2px",
                backgroundColor: brand.accent,
              }}
            />
            <span
              style={{
                fontSize: "22px",
                fontWeight: 300,
                color: brand.textSecondary,
              }}
            >
              Software Engineer
            </span>
          </div>
        </div>

        {/* Bottom tech stack */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          {techStack.map((tech, i) => (
            <div
              key={tech}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              {i > 0 && (
                <span style={{ fontSize: "14px", color: brand.textMuted }}>
                  ·
                </span>
              )}
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: brand.textMuted,
                  letterSpacing: "0.05em",
                }}
              >
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.map((f) => ({
        name: f.name,
        data: f.data,
        style: f.style,
        weight: f.weight,
      })),
    }
  );
}
