import localFont from "next/font/local";

export const valueSansPro = localFont({
  src: [
    {
      path: "./Value Sans Pro/ValueSansPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Value Sans Pro/ValueSansPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Value Sans Pro/ValueSansPro-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Value Sans Pro/ValueSansPro-Black.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const abril = localFont({
  src: [
    {
      path: "./Abril/Abril_Display_Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Abril/Abril_Display_SemiBold.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Abril/Abril_Display_Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Abril/Abril_Display_ExtraBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const bakilda = localFont({
  src: "./Bakilda/bakilda-histori.ttf",
  display: "swap",
});
