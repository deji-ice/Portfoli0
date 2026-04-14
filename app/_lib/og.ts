// Shared brand constants and font loader for OG image generation

export const brand = {
  bg: "#ebebf3",
  text: "#1e293b",
  textSecondary: "#475569",
  textMuted: "#94a3b8",
  accent: "#10b981",
  border: "rgba(148, 163, 184, 0.3)",
} as const;

export const OG_SIZE = { width: 1200, height: 630 };

export async function loadFonts() {
  const [regular, bold, light] = await Promise.all([
    loadGoogleFont("Outfit", 400),
    loadGoogleFont("Outfit", 700),
    loadGoogleFont("Outfit", 300),
  ]);

  return [
    { name: "Outfit", data: regular, style: "normal" as const, weight: 400 as const },
    { name: "Outfit", data: bold, style: "normal" as const, weight: 700 as const },
    { name: "Outfit", data: light, style: "normal" as const, weight: 300 as const },
  ];
}

async function loadGoogleFont(
  family: string,
  weight: number
): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family
  )}:wght@${weight}&display=swap`;

  // Safari UA triggers TrueType format which Satori supports
  const css = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
    },
  }).then((res) => res.text());

  const match = css.match(/src: url\((.+?)\)/);
  if (!match?.[1]) {
    throw new Error(`Failed to load font: ${family}@${weight}`);
  }

  return fetch(match[1]).then((res) => res.arrayBuffer());
}
