import Image from "next/image";
import { FaReact } from "react-icons/fa";

const Into = () => {
  return (
    <div className="bg-gradient-to-b from-blackish form-1% to-gray-50 h-screen pb-16 pt-24 sm:pb-20 sm:pt-32 md:pt-44 font-nunito">
      <div className="bg-whiteish pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 lg:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <Image
                src={"/pic/certificate.png"}
                alt={"certification"}
                className="absolute inset-0 sm:left-10 rounded-2xl bg-whiteish object-cover shadow-2xl opacity-80"
                width={400}
                height={600}
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24 py-20 md:py-10">
            <figure className="relative isolate pt-6 sm:pt-12">
              <FaReact className="text-secondary w-48 h-48 absolute opacity-25" />
              <blockquote className="text-5xl/8 font-semibold text-blackish sm:text-2xl/9 font-nunito">
                <p>
                  For me, development is more than a job—it's a lifestyle rooted
                  in solving problems and endless curiosity.
                </p>
              </blockquote>
              <figcaption className="mt-8 text-lg font-nunito">
                <div className="font-medium text-blackish">Polly Orlowska</div>
                <div className="mt-1 text-gray-600 font-light">
                  Develer, Designer, Enterprenour
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Into;
