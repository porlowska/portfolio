"use client";
import Link from "next/link";
import { socials } from "../_data/socials";

type linksProps = {
  divClassName?: string;
  iconClassName: string;
};
const SocialLinks = ({ divClassName, iconClassName }: linksProps) => {
  let socialLinks = socials;

  return (
    <>
      <div className={`${divClassName} flex justify-center gap-x-4`}>
        {socialLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon aria-hidden="true" className={iconClassName} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;
