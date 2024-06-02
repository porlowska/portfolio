import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
      <section className=" text-white p-10 text-center bg-background">
        <h2 className="font-maissub text-5xl mb-4 p-4"><span className="text-secondary text-shadow">My</span> Projects</h2>
          <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center" >
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
          </div>
      </section>
    );
  };
  
  export default Projects;
  