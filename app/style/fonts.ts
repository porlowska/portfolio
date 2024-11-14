import { Manrope, Nunito } from "next/font/google";

export const nunito = Nunito({
  weight: ["300", "400", "500", "600"], // light, regular, medium
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const manrope = Manrope({
  weight: ["300", "600", "700", "800"], // semibold, bold, extrabold
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});
