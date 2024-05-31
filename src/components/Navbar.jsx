import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex justify-between items-center p-4">
      <Link href="/" passHref>
        <Image src="/logo/portfolio.svg" alt="Portfolio Logo" width={150} height={50} />
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="#about" passHref><p className="text-white hover:text-gray-300">About</p></Link>
        <Link href="#projects" passHref><p className="text-white hover:text-gray-300">Projects</p></Link>
        <Link href="#contact" passHref><p className="text-white hover:text-gray-300">Contact</p></Link>
        {/* <Link href="https://github.com/yourgithub" passHref>
          <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
        </Link>
        <Link href="https://linkedin.com/in/yourlinkedin" passHref>
          <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=yourphonenumber" passHref>
          <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
        </Link>
        <Link href="mailto:your-email@example.com" passHref>
          <Image src="/icons/email.svg" alt="Email" width={24} height={24} />
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
