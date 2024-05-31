import Image from 'next/image';

const Welcome = () => {
  return (
    <section className="text-white text-center p-10">
      <h1 className="font-heading text-4xl mb-4">Welcome to My Portfolio</h1>
      <p className="font-body mb-4">Here's a brief overview of who I am and what I do.</p>
      {/* Include an animated bird here if available */}
      <Image src="/animations/bird-animation.gif" alt="Animated Bird" width={300} height={300} />
    </section>
  );
};

export default Welcome;
