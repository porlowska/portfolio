import { FaReact } from "react-icons/fa";
import { about } from "../../_data/data";

const Description = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-50 py-24 md:py-12 font-nunito">
      <div
        aria-hidden="true"
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      >
        <div
          style={{
            clipPath:
              "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
          }}
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-primary to-primary opacity-30"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-2xl/7 font-medium text-secondary">About Me</p>
          <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-blackish sm:text-5xl">
            {about.heading}
          </h2>
          <p className="mt-6 text-xl/8 text-gray-700">{about.liner}</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <video
              className=" md:mt-10 rounded-xl border border-secondary"
              playsInline
              muted
              autoPlay
              loop
              preload="auto"
            >
              <source src="/videos/pigeon.mp4" type="video/mp4" />
              Your browser does not support videos.
            </video>
          </div>
          <div className="max-w-xl text-base/7 text-gray-700 lg:col-span-7">
            <p>{about.description[0]}</p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <h3 className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-blackish">
                What do I Bring to the Table?
              </h3>
              {about.features.map((feat, index) => (
                <li className="flex gap-x-3">
                  <FaReact
                    key={index}
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-secondary"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      {feat.h}
                    </strong>
                    {feat.b}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8">{about.description[1]}</p>
            <p className="mt-6">{about.description[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
