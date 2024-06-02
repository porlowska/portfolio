
import { Navbar } from "flowbite-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <Navbar fluid className="bg-background">
      <Navbar.Brand href="#">
        <img
          src="/logo/logo.png"
          className="mr-3 h-[70px] sm:h-[95px] lg:h-[120px]"
          alt="Portfolio logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        
      
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
        
      
        

        <Navbar.Toggle className="focus:bg-background  focus:ring-black hover:color-secondary" />
      </div>
      <Navbar.Collapse className="focus:bg-background hover:text-black">
        <Navbar.Link
          href="#about"
          className="text-primary  md:text-xl font-aven font-semibold hover:text-secondary"
        >
          About
        </Navbar.Link>
        <Navbar.Link
          href="#projects"
          className="text-primary md:text-xl font-aven font-semibold hover:text-secondary"
        >
          Projects
        </Navbar.Link>
        <Navbar.Link
          href="#contact"
          className="text-primary md:text-xl font-aven font-semibold hover:text-secondary"
        >
          Contact Me
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
