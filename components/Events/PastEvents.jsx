import { FaCalendarAlt } from 'react-icons/fa';

const timelineData = [
  {
    title: 'Recent Events',
    date: 'June 2023',
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    latest: true,
    downloadLink: '#',
    svgPath1: 'M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z',
    imageUrl: 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837531/soumya_pro_hvswzv.webp',
  },
  {
    title: 'Past Events',
    date: 'August 2022',
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    latest: false,
    svgPath1: 'M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z',
    imageUrl: 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837531/soumya_pro_hvswzv.webp',
  },
  {
    title: 'Past Events',
    date: 'April 2022',
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    latest: false,
    svgPath1: 'M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z',
    imageUrl: 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837531/soumya_pro_hvswzv.webp',
  },
];

const TimelineItem = ({ item, index }) => {

  return (
    <div className="flex ">
      <div className='bg-pastevent lg:w-[700px] sm:w-[600px]  border-orange-400 border rounded-xl py-4 m-4 my-4 px-6 flex flex-col items-center'>
        <li className="">
          <span className="absolute flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full -start-4  ring-8 ring-white dark:ring-[#141819] ">

<FaCalendarAlt size={20} className="text-white "/>
          </span>
         
       <div className="sm:flex-row  flex flex-col">
       <div className="sm:w-3/5 p-1 ">
         <h3 className="flex items-center mb-1 text-xl font-semibold text-orange-700  pb-1 ">
            {item.title}
            {item.latest && (
              <span className=" text-orange-800 text-sm font-medium pb-1 me-2 px-3 py-0.5 rounded dark:bg-orange-200 border-orange-700 border  ms-3">Latest</span>
            )}
          </h3>
          <time className="block mb-2 text-sm leading-none text-[#f90] font-bold dark:text-gray-500">{item.date}</time>
          <p className="mb-4 text-base font-normal  text-gray-900">{item.description}</p>
      
         </div>
          <div className="sm:w-2/5">
       {item.imageUrl && (
            <img src={item.imageUrl} alt={item.title} className="w-full h-auto my-2 rounded-lg" />
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
    <ol className="relative border-s-2 pt-10 mt-10 border-gray-600 ">
      {timelineData.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </ol>
  );
};

export default Timeline;