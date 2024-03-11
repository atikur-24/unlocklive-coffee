import localFont from "next/font/local";

export const valueSansPro = localFont({
  src: [
    {
      path: "../assets/Fonts/Value Sans Pro/ValueSansPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/Fonts/Value Sans Pro/ValueSansPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/Fonts/Value Sans Pro/ValueSansPro-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/Fonts/Value Sans Pro/ValueSansPro-Black.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const bakilda = localFont({
  src: "../assets/Fonts/Bakilda/bakilda-histori.ttf",
  display: "swap",
});

export const abril = localFont({
  src: "../assets/Fonts/Abril/Abril_Text_Regular.otf",
  display: "swap",
});
