import blog1 from '../assets/blog1.svg';
import blog2 from '../assets/blog2.svg';
import blog3 from '../assets/blog3.svg';
import pen from '../assets/pen.svg';
import calendar from '../assets/calendar.svg';
import './Blog.css';

const blogs = [
  { title: 'Top essential Trends in 2023', date: '21 August 2035', author: 'Jon Doe', img: blog1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit ex.' },
  { title: 'Top essential Trends in 2021', date: '21 August 2023', author: 'Jon Doe', img: blog2,
    description: 'Nullam nec fringilla erat, ac dapibus nunc. Integer semper ipsum in fermentum aliquam.' },
  { title: 'Top essential Trends in 2023', date: '21 August 2023', author: 'Jon Doe', img: blog3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit ex.' },
];

export default function Blog() {
  return (
    <section className="w-full bg-[#FFF] max-w-[1920px] mx-auto  wrapper">
      <h2 className="text-[#101750] text-[44px] font-bold leading-[52px] tracking-[1.5%] text-center mb-[72px]">
        Latest Blog
      </h2>

      {/* fluid container instead of fixed 1360px */}
      <div className="w-full max-w-[1360px] mx-auto px-4 md:px-6">
        {/* responsive grid instead of fixed 3 columns with hard widths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {blogs.map((b, i) => (
            <article
              key={i}
              className="group bg-white flex flex-col rounded-[8px] shadow-[8px_24px_32px_-16px_#10175026]
                         transition-all duration-300 hover:shadow-[8px_64px_80px_-16px_#10175026] hover:-translate-y-6
                         min-h-[475px] overflow-hidden"
            >
              {/* image should not shrink – let it define top area */}
              <img
                src={b.img}
                alt={b.title}
                className="w-full h-[290px] object-cover"
              />

              <div className="flex items-center justify-between px-[24px] py-[16px]">
                <span className="text-[#8A8FB9] text-[14px] font-normal gap-[8px] flex flex-row leading-[16px]">
                  <img src={pen} alt="pen" />
                  {b.author}
                </span>
                <span className="text-[#8A8FB9] text-[14px] font-normal gap-[8px] flex flex-row leading-[16px]">
                  <img src={calendar} alt="calendar" />
                  {b.date}
                </span>
              </div>

              {/* content grows to fill remaining height so cards align */}
              <div className="px-[24px] pb-[20px] flex-1 flex flex-col">
                <h3 className="text-[#151875] text-[18px] font-bold leading-[24px] mb-[12px]
                               transition-colors duration-300 group-hover:text-[#FB2E86]">
                  {b.title}
                </h3>
                <p className="text-[#8A8FB9] text-[14px] font-normal leading-[22px] mb-[20px]">
                  {b.description}
                </p>
                <a href="#" className="mt-auto text-[#FB2E86] text-[14px] font-bold leading-[16px] hover:underline">
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
