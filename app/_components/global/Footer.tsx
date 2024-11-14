"use client";
import { socials } from "../../_data/data";
import SocialLinks from "./SocialLinks";
import { navigation } from "../../_data/nav";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-blackish font-nunito">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 lg:px-8">
        <div className="flex justify-center">
          <Logo w={240} h={110} variant={"white"} />
        </div>

        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-whiteish  hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          <SocialLinks data={socials} divClassName="text-whiteish" />
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-400">
          &copy; 2024 Polly Orlowska. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
