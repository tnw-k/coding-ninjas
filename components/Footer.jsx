import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact" className="relative bg-cover bg-no-repeat bg-center w-full min-h-[450px] text-white py-10" // Adjusted height to 400px
      style={{ backgroundImage: "url('/footer.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      
      <div className="relative container mx-auto px-4 flex flex-col h-full z-10">
        <div className="flex flex-col md:flex-row justify-start items-start mb-8">
          
          <div className="flex items-center mb-8 md:mb-0 pl-4 md:pl-8">
            <div className="relative flex-shrink-0 w-[220px] h-[220px]">
              <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" />
            </div>
            <div 
              className="text-white flex-col content-end font-BebasNueue text-[35px] md:text-[15px] font-bold leading-tight ml-[-0px]"
              style={{ width: '400px', height: '60px', left: '195px', top: '86px', letterSpacing: '1px' }} 
            >
              <p style={{ transform: 'scale(1.5, 2)', marginBottom: '15px' }}>CODING NINJAS:</p> 
              <p style={{ transform: 'scale(1.5, 2)', marginBottom: '100px' }}>KIIT CHAPTER</p>  
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-start md:ml-auto mt-[70px]">
            <div className="mr-16 mb-8 md:mb-0 ml-[-650px]">
              <h2 className="text-[#F17522] font-bold text-[24px] md:text-[30px] mb-4">About us</h2>
              <div className="text-[#E3E3E3]/[0.65] text-[15px] md:text-[15px] leading-loose flex-col">
                <p><a href="#about-us">Info</a></p>
                
              </div>
            </div>

            <div className="ml-0 md:ml-8">
              <h2 className="text-[#F17522] font-bold text-[24px] md:text-[30px] mb-4">Contact us</h2>
              <div className="text-[#E3E3E3]/[0.65] text-[15px] md:text-[15px] leading-loose">
                <p>Phone: +91-9051662628</p>
                <p> Email: queries.codingninjaskiitchapter@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        
        <SocialMediaLinks />
        
      </div>
    </footer>
  );
}

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-start space-x-4 ml-4 md:ml-24" style={{ marginTop: '-80px' }}>
      <Link href="https://www.instagram.com/coding.ninjas.kiit?igsh=ZzZjMWp2M2oxbHk2" target="_blank" rel="noopener noreferrer">
        <Image src="/instagram.png" alt="Instagram" width={54} height={54} />
      </Link>
      <Link href="https://www.linkedin.com/company/coding-ninjas-kiit/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
        <Image src="/linkedin.png" alt="LinkedIn" width={54} height={54} />
      </Link>
      <Link href="https://www.facebook.com/codingninjas?utm_source=branding&utm_medium=facebooklinktree&utm_campaign=face_book" target="_blank" rel="noopener noreferrer">
        <Image src="/facebook.png" alt="Facebook" width={54} height={54} />
      </Link>
    </div>
  );
};
