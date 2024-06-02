"use client";

import { Navbar, Button } from "flowbite-react";

const NavBar = () => {
  return (
    <Navbar fluid className="bg-background">
      <Navbar.Brand href="/">
        <img
          src="/logo/logo.png"
          className="mr-3 h-[70px] sm:h-[95px] lg:h-[120px]"
          alt="Portfolio logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button.Group>
          <Button href="https://github.com/porlowska" className="bg-background" >
            <img
              src="/favicons/github.svg"
              alt="GitHub"
              width={24}
              height={24}
            />
          </Button>

          <Button href="http://www.linkedin.com/in/polly-orlowska"
          className="bg-background" >
            <img
              src="/favicons/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </Button>
          <Button href="https://wa.me/447494532324"
          className="bg-background">
            <img
              src="/favicons/whatsapp.svg"
              alt="WhatsApp"
              width={24}
              height={24}
            />
          </Button>
          <Button href="mailto:polly.orlowska@gmail.com"
          className="bg-background">
            <img src="/favicons/mail.svg" alt="Email" width={24} height={24} />
          </Button>
        </Button.Group>

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
