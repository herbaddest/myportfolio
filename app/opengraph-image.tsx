import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background:
            "radial-gradient(700px 360px at 80% 100%, rgba(242,160,61,0.55), transparent 70%), linear-gradient(180deg, #0C1517 30%, #14363F 100%)",
          color: "#F1E6D2",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 190, fontWeight: 300, letterSpacing: -8, lineHeight: 0.9 }}>{site.name}</div>
        <div style={{ fontSize: 34, color: "#D8CDB9", marginTop: 28, maxWidth: 820, lineHeight: 1.3, fontFamily: "sans-serif" }}>
          {`${site.role}. Web apps with payments, wallets and admin dashboards.`}
        </div>
      </div>
    ),
    size
  );
}
