import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-no-repeat bg-center w-full min-h-[590px] text-white py-10"
      style={{ backgroundImage: "url('/footer.png')" }}
    >
      {/* Black overlay for background color */}
      <div className="absolute inset-0 bg-black opacity-75"></div>
      
      <div className="relative container mx-auto px-4 flex flex-col h-full z-10">
        <div className="flex flex-col md:flex-row justify-start items-start mb-8">
          
          {/* Logo and Text */}
          <div className="flex items-center mb-8 md:mb-0 pl-4 md:pl-8">
            <div className="relative flex-shrink-0 w-[220px] h-[220px]">
              <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" />
            </div>
            <div className="text-white flex-col content-end font-BebasNueue text-[35px] md:text-[15px] font-bold leading-tight ml-[-100px]" style={{ width: '168px', height: '60px', left: '195px', top: '86px', letterSpacing: '1px' }}>
              <p style={{ transform: 'scale(1, 2)', marginBottom: '15px' }}>CODING NINJAS:</p>
              <p style={{ transform: 'scale(1, 2)', marginBottom: '100px' }}>KIIT CHAPTER</p>
            </div>
          </div>

          {/* About Us and Contact Us Sections */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start md:ml-auto mt-[70px]">
            <div className="mr-16 mb-8 md:mb-0 ml-[-650px]">
              <h2 className="text-[#F17522] font-bold text-[24px] md:text-[30px] mb-4">About us</h2>
              <div className="text-[#E3E3E3]/[0.65] font-medium text-[18px] md:text-[20px] leading-loose flex-col">
                <p><a href="#">link 1</a></p>
                <p><a href="#">link 2</a></p>
              </div>
            </div>

            <div className="ml-0 md:ml-8">
              <h2 className="text-[#F17522] font-bold text-[24px] md:text-[30px] mb-4">Contact us</h2>
              <div className="text-[#E3E3E3]/[0.65] font-medium text-[18px] md:text-[20px] leading-loose">
                <p>1. contact point 1</p>
                <p>2. contact point 2</p>
                <p>3. contact point 3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-start space-x-4 ml-4 md:ml-24" style={{ marginTop: '-80px' }}>
          <Image src="/instagram.png" alt="Instagram" width={54} height={54} />
          <Image src="/linkedin.png" alt="LinkedIn" width={54} height={54} />
          <Image src="/facebook.png" alt="Facebook" width={54} height={54} />
        </div>
      </div>
    </footer>
  );
}
