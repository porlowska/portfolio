"use client";
import Link from "next/link";

type LinksProps = {
  divClassName?: string;
  data: {
    name: string;
    href: string;
    icon: any;
  }[];
};

const SocialLinks = ({ divClassName, data }: LinksProps) => {
  return (
    <>
      <div className={`${divClassName} flex justify-center gap-x-4`}>
        {data.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon
              aria-hidden="true"
              className={"h-6 w-6 gap-2 hover:text-secondary"}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;
