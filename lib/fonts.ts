import localFont from "next/font/local";

export const shanti = localFont({
  src: [
    {
      path: "./fonts/Shanti-400-latin.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const cormorantGaramond = localFont({
  src: [
    {
      path: "./fonts/CormorantGaramond-400-latin.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CormorantGaramond-500-latin.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
});

