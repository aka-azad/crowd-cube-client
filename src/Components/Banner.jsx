import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const imgLinks = [
    "https://blogbymichele.wordpress.com/wp-content/uploads/2023/04/success.jpg",
    "https://imageio.forbes.com/specials-images/imageserve/63cc14a828e2b2c728922d86/0x0.jpg",
    "https://one-more-tree.org/wp-content/uploads/2024/04/599323-870x563.jpg",
    "https://www.indiafilings.com/learn/wp-content/uploads/2019/09/Community-Investment-Fund.jpg",
  ];
  return (
    <div className="container mx-auto my-11">
      <Swiper
        navigation
        spaceBetween={50}
        slidesPerView={1}
      >
        {imgLinks.map((link, i) => (
          <SwiperSlide key={i}>
            <img className="w-full max-h-[500px] rounded-2xl object-center object-cover" src={link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
