import Card from "./Card";

const Projects = () => {
    return (
      <section className=" text-white p-10 text-center">
        <h2 className="font-heading text-3xl mb-4">Projects</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center" >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
      </section>
    );
  };
  
  export default Projects;
  