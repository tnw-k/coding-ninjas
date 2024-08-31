import { FaCalendarAlt } from 'react-icons/fa';

const timelineData = [
  {
    title: 'Badlav',
    date: 'September 2024',
    description: "Badlav - witness the change over decades in cloud Technologies. 🌩️🚀",
    latest: true,
    downloadLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdb2ngjQyrfG0gUYj_X9IKyenQ6Yn2udK0zWXxKSCZPNFIa5A/viewform',
    svgPath1: 'M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z',
    imageUrl: '/assets/images/badlav.png',
  },
  {
    title: 'Cyber Breach',
    date: 'March 2024',
    description: "Join us this Sunday for a chance to win exciting prizes as we delve into 'Unlocking the Future: Navigating the Shadows of Cybersecurity,' taking a small step towards a more secure tomorrow. 👾",
    latest: false,
    svgPath1: 'M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z',
    imageUrl: '/assets/images/cyberbreach.png',
  },
  {
    title: 'Code Hustle',
    date: 'November 2024',
    description: " 🌟 Unleash your coding genius, and win epic prizes! 💻✨",
    latest: false,
    svgPath1: 'M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z',
    imageUrl: '/assets/images/codehustle.png',
  },
];

const TimelineItem = ({ item, index }) => {
  return (
    <div className="flex">
      <div className='bg-pastevent lg:w-[700px] sm:w-[600px] border-orange-400 border rounded-xl py-4 m-4 my-4 px-6 flex flex-col items-center'>
        <li className="">
          <span className="absolute flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full -start-4 ring-8 ring-white dark:ring-[#141819]">
            <FaCalendarAlt size={20} className="text-white" />
          </span>

          <div className="sm:flex-row flex flex-col">
            <div className="sm:w-3/5 p-1">
              <h3 className="flex items-center mb-1 text-xl font-semibold text-orange-700 pb-1">
                {item.title}
                {item.latest && (
                  <span className="text-orange-800 text-sm font-medium pb-1 me-2 px-3 py-0.5 rounded dark:bg-orange-200 border-orange-700 border ms-3">Latest</span>
                )}
              </h3>
              <time className="block mb-2 text-sm leading-none text-[#f90] font-bold dark:text-gray-500">{item.date}</time>
              <p className="mb-4 text-base font-normal text-gray-900">{item.description}</p>
              {item.latest && (
                <a href={item.downloadLink} className="inline-block px-6 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors duration-300">Register Now</a>
              )}
            </div>
            <div className="sm:w-2/5">
              {item.imageUrl && (
                <img src={item.imageUrl} alt={item.title} className="w-full h-44 my-2 rounded-lg" />
              )}
            </div>
          </div>
        </li>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <ol className="relative border-s-2 pt-10 mt-5 border-gray-600">
      {timelineData.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </ol>
  );
};

export default Timeline;
