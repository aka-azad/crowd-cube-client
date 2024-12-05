import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const imgLinks = [
    {
      link: "https://blogbymichele.wordpress.com/wp-content/uploads/2023/04/success.jpg",
      text: "Empower Ideas, Fund Futures",
    },
    {
      link: "https://imageio.forbes.com/specials-images/imageserve/63cc14a828e2b2c728922d86/0x0.jpg",
      text: "Invest in Innovation",
    },
    {
      link: "https://one-more-tree.org/wp-content/uploads/2024/04/599323-870x563.jpg",
      text: "Planting Trees for a Greener Tomorrow",
    },
    {
      link: "https://www.indiafilings.com/learn/wp-content/uploads/2019/09/Community-Investment-Fund.jpg",
      text: "Community Investment Opportunities",
    },
  ];


  return (
    <div className="container mx-auto my-11">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {imgLinks.map((slide, i) => (
          <SwiperSlide key={i} className="relative">
            <img
              className="w-full max-h-[500px] rounded-2xl object-center object-cover"
              src={slide.link}
              alt={`slide-${i}`}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl">
              <h2 className="text-4xl text-white font-bold text-center px-4">
                <Typewriter
                  words={[slide.text]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                />
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
