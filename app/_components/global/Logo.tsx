"use client";
import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  w: number;
  h: number;
  variant: "white" | "black" | null;
  className?: string;
};

const Logo = ({ w, h, variant, className }: LogoProps) => {
  let logo =
    variant === "white" ? "/logo/logo-white.png" : "/logo/logo-black.png";

  return (
    <>
      <Link
        href="/"
        className={`${className} flex items-center  font-semibold text-xl md:text-3xl`}
      >
        <Image
          src={logo}
          alt="porlowska portfolio logo"
          width={w}
          height={h}
          priority
        />
      </Link>
    </>
  );
};

export default Logo;
