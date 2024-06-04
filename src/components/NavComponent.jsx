"use client"
import Link from "next/link";
import Image from "next/image";

export default function NavComponent(){
  return (
    

<nav className="bg-background md:fixed w-full z-20 top-0  ">

  <div className="flex flex-row items-center justify-between md:px-5 mx-auto p-2">

  <Link href="#" passHref className="flex items-center space-x-3 rtl:space-x-reverse pt-2 pl-2 max-w-[150px] md:max-w-[225px]">
          <Image src="/logo/logo.png" alt="Portfolio" width={225} height={75} />
        </Link>


  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-0 md:gap-3 p-3 mt-4 md:mt-0 md:ml-15">

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


      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex p-1 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-secondary " aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>

  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 font-aven" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:flex-row md:flex-end md:mt-0 md:border-0">
    
      <li>
        <Link href="#about"
          className="text-primary  md:text-xl font-aven font-semibold hover:text-secondary block py-2 px-3">About</Link>
      </li>
      <li>
      <Link href="#projects"
          className="text-primary  md:text-xl font-aven font-semibold hover:text-secondary block py-2 px-3">Projects</Link>
      </li>
      <li>
      <Link href="#contact"
          className="text-primary  md:text-xl font-aven font-semibold hover:text-secondary block py-2 px-3">Contact Me</Link>
      </li>
    </ul>
  </div>
  </div>

</nav>

  );
};
