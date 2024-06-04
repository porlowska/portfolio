"use client"
import Form from "./Form";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:justify-evenly bg-gradient-to-b from-background  via-secondary  to-background text-primary">

      <div className="flex flex-col items-center pl-4">

        <h2 className="font-maissub text-5xl text-center p-5 flex-none">
          <span className="text-secondary text-shadow">Get</span> in touch
        </h2>

        <div className="flex flex-row justify-center gap-2">
          <Link href="https://github.com/porlowska" passHref>
            <img
              src="/favicons/github.svg"
              alt="GitHub"
              width={30}
              height={30}
            />
          </Link>
          <Link href="http://www.linkedin.com/in/polly-orlowska" passHref>
            <img
              src="/favicons/linkedin.svg"
              alt="LinkedIn"
              width={30}
              height={30}
            />
          </Link>
          <Link href="https://wa.me/447494532324" passHref>
            <img
              src="/favicons/whatsapp.svg"
              alt="WhatsApp"
              width={30}
              height={30}
            />
          </Link>
          <Link href="mailto:polly.orlowska@gmail.com" passHref>
            <img src="/favicons/mail.svg" alt="Email" width={30} height={30} />
          </Link>
        </div>
        <Link href="#" passHref className="pt-2">
          <Image src="/logo/logo.png" alt="Portfolio" width={225} height={75} />
        </Link>
      </div>

      <Form />
    </section>
  );
};

export default Contact;
