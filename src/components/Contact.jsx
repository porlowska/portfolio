import Form from "./Form";
import Link from "next/link";
import Image from "next/image";

const Contact= () => {
    return (
      <section className="bg-secondary text-primary flex flex-col md:flex-row justify-between">
      <div>
        <h2 className="font-maissub text-3xl m-4 text-center">Get in touch</h2>
        <div className="flex flex-row justify-end gap-2">
        <Link href="https://github.com/porlowska" passHref>
          <img src="/favicons/github.svg" alt="GitHub" width={24} height={24} />
        </Link>
        <Link href="http://www.linkedin.com/in/polly-orlowska" passHref>
          <img
            src="/favicons/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </Link>
        <Link href="https://wa.me/447494532324" passHref>
          <img
            src="/favicons/whatsapp.svg"
            alt="WhatsApp"
            width={24}
            height={24}
          />
        </Link>
        <Link href="mailto:polly.orlowska@gmail.com" passHref>
          <img src="/favicons/mail.svg" alt="Email" width={24} height={24} />
        </Link>
        </div>
        <Link href="/" passHref>
        <Image src="/logo/logo.png" alt="Portfolio" width={225} height={75} />
      </Link>
      </div>
      <Form/>
      </section>
      );
      };
      
      export default Contact;
  