import SocialLinks from "../global/SocialLinks";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { socials } from "../../_data/data";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="relative isolate bg-gray-50 py-24">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-secondary to-rose-100"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-secondary to-rose-100 xl:ml-0 xl:mr-[calc(50%-12rem)]"
        />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 lg:static lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-pretty text-6xl font-semibold tracking-tight text-secondary sm:text-5xl">
              Get in touch:
            </h2>
            <p className="mt-6 text-lg/8 text-gray-900">
              Let's connect on Linkedin, drop me a message, call me!
              <br />
              <span className="text-red-500">
                The Form is under construction!
              </span>
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-900">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <FaMapMarkerAlt
                    aria-hidden="true"
                    className="h-7 w-6 text-primary"
                  />
                </dt>
                <dd>Wimbledon, London</dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <FaPhoneAlt
                    aria-hidden="true"
                    className="h-7 w-6 text-primary"
                  />
                </dt>
                <dd>
                  <a href="tel:+447494532324" className="hover:text-gray-900">
                    07494 532324
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4"></div>
              <SocialLinks divClassName={"pt-6 text-blackish"} data={socials} />
            </dl>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
