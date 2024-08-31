import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-cover bg-no-repeat bg-center w-full min-h-[50vh] text-white py-10"
      style={{ backgroundImage: "url('/footer.png')", backgroundPosition: 'bottom' }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      
      <div className="relative container mx-auto px-4 flex flex-col h-full z-10">
        <div className="flex flex-col md:flex-row justify-start items-start mb-8">
          
          <div className="flex items-center mb-8 md:mb-0 pl-4 lg:pl-8">
            <div className="relative flex-shrink-0 lg:w-[100px] lg:h-[100px] w-16 h-16">
              <Image src="/assets/images/logo.png" alt="Logo" layout="fill" objectFit="contain" />
            </div>
            <div 
              className="text-white font-BebasNueue text-[35px] font-bold leading-tight md:leading-none ml-3 sm:ml-0"
              style={{ letterSpacing: '0px' }} 
            >
              <p className="text-[20px]  lg:text-[30px] mt-4 pb-2  ">CODING NINJAS:</p> 
              <p className="text-[20px]  lg:text-[30px]  mb-3">KIIT CHAPTER</p>  
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-start md:ml-auto mt-3 xl:mt-[70px]">
            <div className="mb-8 md:mb-0 lg:mr-16">
              <h2 className="text-[#F17522] font-bold text-[20px] lg:text-[30px] mb-4">About us</h2>
              <div className="text-[#E3E3E3]/[0.65] text-[14px] lg:text-[15px] leading-loose">
                <p><a href="#about-us">Info</a></p>
              </div>
            </div>

            <div className="md:ml-8">
              <h2 className="text-[#F17522] font-bold text-[20px] lg:text-[30px] mb-4">Contact us</h2>
              <div className="text-[#E3E3E3]/[0.65] text-[13px] lg:text-[15px] leading-loose">
                <p>Phone: +91-9051662628</p>
                <p>Email: queries.codingninjaskiitchapter@gmail.com</p>
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
    <div className="flex justify-start space-x-3 lg:space-x-4 ml-4 lg:ml-24 mt-[-20px] xl:mt-[-80px]">
      <SocialMediaLink href="https://www.instagram.com/coding.ninjas.kiit?igsh=ZzZjMWp2M2oxbHk2" src="/instagram.png" alt="Instagram" />
      <SocialMediaLink href="https://www.linkedin.com/company/coding-ninjas-kiit/?originalSubdomain=in" src="/linkedin.png" alt="LinkedIn" />
      <SocialMediaLink href="https://www.facebook.com/codingninjas?utm_source=branding&utm_medium=facebooklinktree&utm_campaign=face_book" src="/facebook.png" alt="Facebook" />
    </div>
  );
};

const SocialMediaLink = ({ href, src, alt }) => {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-[40px] h-[40px] md:w-[54px] md:h-[54px] relative hover:opacity-80 transition-opacity"
    >
      <Image 
        src={src} 
        alt={alt} 
        layout="fill" 
        objectFit="contain"
      />
    </Link>
  );
};

