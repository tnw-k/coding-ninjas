import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex-row items-center justify-center relative bg-cover bg-no-repeat bg-center  text-white overflow-hidden" style={{ backgroundImage: "url('/puzzle-background.png')" , height:'150px' , backgroundColor:'black'}}>
      <div className="container mx-auto flex items-center justify-between py-4 relative z-20">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={200} height={200} className="mr-4 pl-10 z-30 relative" />
        </Link>
        <div className="flex justify-center flex-1 space-x-4 nav-items z-10">
          <NavItem href="/" text="Home" />
          <NavItem href="/events" text="Events" />
          <NavItem href="/domain" text="Domain" />
          <NavItem href="/contact" text="Contact us" />
          <NavItem href="/about" text="About Us" />
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center puzzle-background">
      </div>
    </nav>
  );
};

const NavItem = ({ href, text }) => (
  <Link href={href} className="group relative px-2 py-1.5">
    <div className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out  opacity-0 group-hover:opacity-40"></div>
    <div className="absolute top-0 left-0 w-full h-[2px] bg-white -translate-y-1 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-70"></div>
    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white translate-y-1 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-70"></div>
    <div className="relative z-10   md:text-base lg:text-lg xl:text-xl 2xl:text-[1vw]  transition-colors duration-300 ease-in-out">
      {text}
    </div>
  </Link>
);

export default Navbar;