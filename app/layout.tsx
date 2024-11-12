import type { Metadata } from "next";
import "./style/globals.css";
import { nunito, manrope } from "./style/fonts";

export const metadata: Metadata = {
  title: "PORLOWSKA portfolio",
  description: "Professional Portfolio of a web developer and web designer",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={`${nunito.variable} ${manrope.variable}`}>
      <body className={"bg-whiteish font-aven"}>{children}</body>
    </html>
  );
};

export default RootLayout;
