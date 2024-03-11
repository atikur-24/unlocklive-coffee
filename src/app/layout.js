import Navbar from "@/components/shared/Navbar";
import { valueSansPro } from "./font";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${valueSansPro.className} text-sm text-primary lg:text-base`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
