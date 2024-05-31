import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="bg-black text-white p-10">
      <h2 className=" text-center font-heading text-3xl mb-4">
        About <span className="text-secondary">Me</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="flex-1">
          <Image
            src="/pic/portrait.jpg"
            width={540}
            height={540}
            alt="Picture of Polly"
          />
          <Image
            src="/pic/certificate.png"
            width={632}
            height={474}
            alt="Certificate Front end web development"
          />
        </div>
        <div className="flex-1">
          <p className="font-body">
            I’m Polly Orlowska, a front-end web developer and engeneer based in
            London.
          </p>
          <p className="font-body">
            I am skilled in HTML, CSS, JavaScript, and React JS & NextJS,
            seeking a position to advance these skills in a dynamic development
            role. My background includes launching a startup and leading
            successful web projects, highlighting my dedication to innovation
            and quality in web development. I am committed to delivering
            user-centric solutions that drive business success.
          </p>

          <p className="font-body">
          If you’re looking for someone who understands the heartbeat of a business and can translate it into a compelling web presence, you’ve found the right person.
          </p>
          <p className="font-body">
            Software languages: HTML5, CSS3, JavaScript
            Libraries/Frameworks:jQuery, Bootstrap, TailwindCSS, ReactJS, NextJS
            Tools:Git, GitHub Web Design:Wix Website Builder, SEO, UX/UI Design,
            Responsive Web Design
          </p>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;

