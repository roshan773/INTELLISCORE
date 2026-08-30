import { ImageResponse } from "next/og";

export const alt = "INTELLUSCORE — BUILD. AUTOMATE. SECURE.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #121A0D 0%, #1A2514 50%, #23321B 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "70px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient Glows */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(150, 184, 87, 0.25) 0%, rgba(18, 26, 13, 0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "20%",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(85, 107, 47, 0.3) 0%, rgba(18, 26, 13, 0) 70%)",
          }}
        />

        {/* Top Header / Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              padding: "8px 20px",
              borderRadius: "9999px",
              background: "#23321B",
              border: "1px solid rgba(255, 253, 208, 0.25)",
              color: "#FFFDD0",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#96B857",
              }}
            />
            OFFICIAL PLATFORM // HTTPS://INTELLUSCORE.VERCEL.APP
          </div>
        </div>

        {/* Main Content Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              fontSize: "76px",
              fontWeight: 900,
              color: "#FFFDD0",
              lineHeight: "0.95",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>INTELLUSCORE</span>
            <span style={{ color: "#96B857", fontSize: "46px", marginTop: "8px" }}>
              BUILD. AUTOMATE. SECURE.
            </span>
          </div>

          <div
            style={{
              fontSize: "24px",
              color: "#D3CF9F",
              lineHeight: "1.4",
              fontWeight: 400,
              marginTop: "12px",
            }}
          >
            Web Architecture • Autonomous AI Pipelines • Zero-Trust Cybersecurity
          </div>
        </div>

        {/* Footer Meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 253, 208, 0.15)",
            paddingTop: "24px",
            color: "#D3CF9F",
            fontSize: "16px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>https://intelluscore.vercel.app</span>
          <span style={{ color: "#FFFDD0", fontWeight: 700 }}>
            Enterprise Systems & AI Studio
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
