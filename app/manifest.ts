import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vindy - AI Voice Assistant for Hiring",
    short_name: "Vindy",
    description:
      "Yapay zekâ destekli sesli asistan ile işe alım süreçlerinizi otomatikleştirin",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#2962FF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
