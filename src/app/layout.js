import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Momentum",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bebasNeue.className}>{children}</body>
    </html>
  );
}
