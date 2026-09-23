import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0D12",
          borderRadius: "6px",
          border: "1px solid #0052FF",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 800"
          width="24"
          height="24"
        >
          <g fill="#FFFFFF">
            <path d="M 160 160 H 280 V 640 H 160 Z" />
            <path
              d="M 280 160 H 440 L 520 240 V 320 L 440 400 H 280 Z M 280 250 H 400 L 430 280 V 280 L 400 310 H 280 Z"
              fillRule="evenodd"
            />
            <path d="M 280 400 L 520 640 H 640 L 400 400 Z" />
            <path d="M 520 160 H 640 V 480 L 520 360 Z" />
          </g>
          <polygon points="400,400 520,360 480,480" fill="#0052FF" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
