"use client";
import SocialLinks from "../SocialLinks";

type ProjectCardProps = {
  onClick: () => void;
  data: {
    name: string;
    shortBody: string;
    imageUrl: string;
    links: {
      name: string;
      href: string;
      icon: React.ComponentType;
    }[];
  };
};

const ProjectCard = ({ data, onClick }: ProjectCardProps) => {
  return (
    <button
      key={data.name}
      className="pt-8 sm:inline-block sm:w-full sm:px-4 "
      onClick={onClick}
    >
      <figure className="rounded-2xl bg-white  p-8 text-sm/6 border-r border-b border-r-primary border-primary border-opacity-40 shadow-md hover:shadow-xl">
        <img
          alt={data.name}
          src={data.imageUrl}
          className="w-full h-full object-cover rounded-t-2xl"
        />
        <figcaption className="mt-6 flex flex-col items-center gap-x-4">
          <h5>{data.name}</h5>
          <p>{data.shortBody}</p>
          <SocialLinks data={data.links} divClassName="" />
        </figcaption>
      </figure>
    </button>
  );
};
export default ProjectCard;
