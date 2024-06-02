const Welcome = () => {
  return (
    <section className="p-10 flex flex-col sm:flex-row items-center sm:justify-between bg-background">

      {/* TEXT */}
      <div  className="flex-none my-2 md:py-4 md:pl-10 lg:pl-20 xl:pl-30 md:justify-between"> 
      <h2 className="font-maissub text-secondary text-5xl mb-4 drop-shadow-xl shadow-primary text-shadow">
        Hello!
      </h2>
      <h2 className="text-primary font-maissub text-4xl md:text-5xl lg:text-6xl ">How are you today?</h2>
      <h1 className="font-aven mb-4 text-primary">
        My name is <span className="text-secondary">Polly</span>, welcome to my
        portfolio.{" "}
      </h1>

      {/* VIDEO */}
      </div>
      <div className="lg:pr-20 xl:pr-30 2xl:pr-40" >
      <video className="w-[250px] md:w-[340px] lg:w-[500px] xl:w-[600px]"  autoPlay loop preload="auto">
        <source src="/videos/PCP.mp4" type="video/mp4" />
        Your browser does not support videos.
      </video>
      </div>

    </section>
  );
};

export default Welcome;
