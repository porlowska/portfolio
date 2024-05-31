const Welcome = () => {
  return (
    <section className="p-10 flex flex-col md:flex-row justify-between">
      <div  className="flex-none"> 
      <h2 className="font-heading text-secondary text-4xl mb-4 drop-shadow-xl">
        Hello!
      </h2>
      <h2 className="font-heading text-4xl mb-4">How are you today?</h2>
      <h1 className="font-body mb-4">
        My name is <span className="text-secondary">Polly</span>, welcome to my
        portfolio.{" "}
      </h1>
      </div>
      <video className=" w-[250px] md:w-[400px] lg:w-[700px] xl:w-[900px] aspect-square "  autoPlay loop preload="auto">
        <source src="/videos/PCP.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Welcome;
