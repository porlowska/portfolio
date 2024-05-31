import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-background text-primary font-body flex justify-between items-center p-4">
      <Link href="/" passHref>
        <Image src="/logo/logo.png" alt="Portfolio" width={225} height={75} />
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="#about" passHref>
          <p className="text-primary font-body font-semibold hover:text-gray-300">
            About
          </p>
        </Link>
        <Link href="#projects" passHref>
          <p className="text-primary font-body font-semibold hover:text-gray-300">
            Projects
          </p>
        </Link>
        <Link href="#contact" passHref>
          <p className="text-primary font-body font-semibold hover:text-gray-300">
            Contact
          </p>
        </Link>
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
    </nav>
  );
};

export default Navbar;
