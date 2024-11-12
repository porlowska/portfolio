

import { Card } from "flowbite-react";
import Link from "next/link";



const ProjectCard = ({data}) => {
  return (
    <Card
      className="max-w-md bg-background rounded-lg shadow-lg shadow-secondary"
      imgAlt={data.title}
      imgSrc={data.src}
    >
      <h5 className="text-2xl font-bold tracking-tight text-primary">
        {data.title}
      </h5>
      <p className="font-aven text-primary">
        {data.description}
      </p>

      <div className="flex flex-row justify-end gap-2 ">
      <Link href={data.links.github} passHref className="hover:shadow-secondary">
          <img src="/favicons/github.svg" alt="GitHub" width={24} height={24} />
        </Link>
        <Link href={data.links.linkedin} passHref>
          <img
            src="/favicons/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </Link>
        <Link href={data.links.deployed} passHref>
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