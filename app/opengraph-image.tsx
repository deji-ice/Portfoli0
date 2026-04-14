import { ImageResponse } from "next/og";
import { brand, OG_SIZE, loadFonts } from "./_lib/og";

export const runtime = "edge";
export const alt = "Ayodeji Atanda - Software Engineer Portfolio";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: brand.bg,
          padding: "70px 80px",
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

        {/* Main content — vertically centered */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "96px",
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
              fontSize: "96px",
              fontWeight: 700,
              color: brand.text,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            Atanda
          </span>

          {/* Accent line + role — large enough to actually read */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "36px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "48px",
                height: "3px",
                backgroundColor: brand.accent,
              }}
            />
            <span
              style={{
                fontSize: "36px",
                fontWeight: 400,
                color: brand.textSecondary,
              }}
            >
              Software Engineer
            </span>
          </div>
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
