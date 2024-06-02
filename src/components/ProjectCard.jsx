"use client";

import { Card } from "flowbite-react";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <Card
      className="max-w-md bg-background rounded-lg shadow-lg shadow-secondary"
      imgAlt="Projext xyz"
      imgSrc="/pic/certificate.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-primary">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-aven text-primary">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>

      <div className="flex flex-row justify-end gap-2 ">
      <Link href="https://github.com/porlowska" passHref className="hover:shadow-secondary">
          <img src="/favicons/github.svg" alt="GitHub" width={24} height={24} />
        </Link>
        <Link href="http://www.linkedin.com/in/polly-orlowska" passHref>
          <img
            src="/favicons/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </Link>
        <Link href="https://wa.me/447494532324" passHref>
          <img
            src="/favicons/deployed.svg"
            alt="Deployed website"
            width={24}
            height={24}
          />
        </Link>
        </div>
    </Card>
  );
}

export default ProjectCard;