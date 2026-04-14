import { ImageResponse } from "next/og";
import { brand, OG_SIZE, loadFonts } from "../_lib/og";

export const runtime = "edge";
export const alt = "Projects - Ayodeji Atanda Portfolio";
export const size = OG_SIZE;
export const contentType = "image/png";

const projectNames = [
  "HypurScope",
  "Afren.ai",
  "StreamScapeX",
  "Furnisphere",
  "MetaSecure",
];

export default async function Image() {
  const fonts = await loadFonts();
  const remaining = 11 - projectNames.length;

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

        {/* Decorative number */}
        <div
          style={{
            position: "absolute",
            right: "40px",
            bottom: "-30px",
            display: "flex",
            fontSize: "320px",
            fontWeight: 700,
            color: "rgba(30, 41, 59, 0.04)",
            lineHeight: 1,
          }}
        >
          11
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
            SELECTED WORK
          </span>
        </div>

        {/* Main content */}
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
              fontSize: "92px",
              fontWeight: 700,
              color: brand.text,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            Projects
          </span>

          {/* Accent line + tagline */}
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
              Things I&apos;ve built that kept me up at night
            </span>
          </div>
        </div>

        {/* Bottom row: project names + twitter handle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {projectNames.map((name, i) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
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
                    letterSpacing: "0.02em",
                  }}
                >
                  {name}
                </span>
              </div>
            ))}
            <span
              style={{
                fontSize: "14px",
                fontWeight: 400,
                color: brand.accent,
                marginLeft: "6px",
              }}
            >
              +{remaining} more
            </span>
          </div>

          {/* Twitter handle */}
          <span
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: brand.textMuted,
              letterSpacing: "0.02em",
            }}
          >
            @dejiXice
          </span>
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
