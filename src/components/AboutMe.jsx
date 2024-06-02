import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="bg-black text-white p-10">
      <h2 className=" text-center font-heading text-5xl mb-4 p-4">
        About <span className="text-secondary">Me</span>
      </h2>
      <div className="flex flex-col md:flex-row">
        <div>
          
          <Image 
          className="rounded-full m-auto p-3"
            src="/pic/portrait.jpg"
            width={340}
            height={340}
            alt="Picture of Polly"
          />
          <Image
          className="rounded-lg p-3 m-auto"
            src="/pic/certificate.png"
            width={500}
            height={375}
            alt="Certificate Front end web development"
          />
        </div>
        <div className="flex flex-col flex-1 p-3 max-w-[500px]justify-center text-center ">
          <p className="font-body pb-6 pt-6">
            I’m Polly Orlowska, a front-end web developer and engeneer based in
            London.
          </p>
          <p className="font-body  pb-6">
            I am skilled in HTML, CSS, JavaScript, and React JS & NextJS,
            seeking a position to advance these skills in a dynamic development
            role. My background includes launching a startup and leading
            successful web projects, highlighting my dedication to innovation
            and quality in web development. I am committed to delivering
            user-centric solutions that drive business success.
          </p>

          <p className="font-body pb-12">
          If you’re looking for someone who understands the heartbeat of a business and can translate it into a compelling web presence, you’ve found the right person.
          </p>
          <p className="font-body">
            Software languages: HTML5, CSS3, JavaScript
            Libraries/Frameworks:jQuery, Bootstrap, TailwindCSS, ReactJS, NextJS
            Tools:Git, GitHub Web Design:Wix Website Builder, SEO, UX/UI Design,
            Responsive Web Design
          </p>

          <video className="w-[200px] m-auto"  autoPlay loop preload="auto">
            <source src="/videos/tabs.mp4" type="video/mp4" />
            Your browser does not support videos.
             </video>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;

