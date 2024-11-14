import type { Metadata } from "next";
import "./style/globals.css";
import { nunito, manrope } from "./style/fonts";
import Header from "./_components/global/Header";
import Footer from "./_components/global/Footer";

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
      <body className={"bg-gradient-to-b from-blackish to-whiteish"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
