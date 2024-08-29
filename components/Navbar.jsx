import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center z-10 justify-center absolute w-full bg-cover bg-no-repeat bg-center bg-[#141819] text-white" style={{ height: '90px' }}>
      <div className="container mx-auto flex items-center justify-between relative z-20"> 
        <Link href="/" className="flex justify-center items-center">
          <Image src="/assets/images/logo.png" alt="Logo" width={50} height={50} className="mr-2 z-30 relative ml-5" />
        </Link>
        <div className="flex justify-center flex-1 space-x-4 nav-items z-10">
          <NavItem href="/" text="Home" />
          <NavItem href="/events" text="Events" />
          <NavItem href="/domain" text="Domain" />
          <NavItem href="/contact" text="Contact us" />
          <NavItem href="/about" text="About Us" />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, text }) => (
  <Link href={href} className="group relative px-1 py-1">
    <div className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-40"></div>
    <div className="absolute top-0 left-0 w-full h-[2px] bg-white -translate-y-1 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-70"></div>
    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white translate-y-1 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-70"></div>
    <div className="relative z-10 md:text-sm lg:text-base xl:text-lg transition-colors duration-300 ease-in-out">
      {text}
    </div>
  </Link>
);

export default Navbar;
