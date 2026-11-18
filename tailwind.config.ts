import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Royal Cosmic Dark Surfaces
        cosmic: {
          black: "#050914",      // Obsidian Black
          midnight: "#06132D",   // Midnight Navy
          deep: "#081B3A",       // Deep Space Navy
          graphite: "#151923",   // Graphite
          royal: "#102A55",      // Royal Blue
          card: "rgba(8, 27, 58, 0.65)",
          border: "rgba(217, 164, 65, 0.2)",
        },
        // Luxury Brand Accents
        gold: {
          metallic: "#D9A441",
          bright: "#F4C86A",
          deep: "#96651E",
          subtle: "rgba(217, 164, 65, 0.15)",
        },
        silver: {
          metallic: "#C7CCD5",
          bright: "#E8ECF2",
          muted: "#8A94A6",
        },
        // Cosmic Accents
        accent: {
          cyan: "#00D9FF",
          purple: "#7557FF",
          magenta: "#E84CB8",
        },
        // Text
        text: {
          primary: "#FFFFFF",
          secondary: "#C7CCD5",
          muted: "#A6AFBF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        hindi: ["var(--font-hindi)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F4C86A 0%, #D9A441 50%, #96651E 100%)",
        "silver-gradient": "linear-gradient(135deg, #FFFFFF 0%, #C7CCD5 50%, #8A94A6 100%)",
        "cosmic-gradient": "linear-gradient(135deg, #7557FF 0%, #00D9FF 100%)",
        "gold-silver": "linear-gradient(135deg, #F4C86A 0%, #C7CCD5 100%)",
        "mesh-hero": "radial-gradient(circle at 50% 20%, rgba(117, 87, 255, 0.15), transparent 60%), radial-gradient(circle at 80% 50%, rgba(0, 217, 255, 0.08), transparent 50%), radial-gradient(circle at 20% 60%, rgba(217, 164, 65, 0.12), transparent 50%)",
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(217, 164, 65, 0.35)",
        "gold-glow-lg": "0 0 50px rgba(217, 164, 65, 0.45)",
        "cyan-glow": "0 0 25px rgba(0, 217, 255, 0.35)",
        "purple-glow": "0 0 30px rgba(117, 87, 255, 0.35)",
        "cosmic-card": "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
