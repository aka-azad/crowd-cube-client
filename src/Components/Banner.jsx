import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className="container mx-auto my-8">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="https://blogbymichele.wordpress.com/wp-content/uploads/2023/04/success.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://imageio.forbes.com/specials-images/imageserve/63cc14a828e2b2c728922d86/0x0.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://one-more-tree.org/wp-content/uploads/2024/04/599323-870x563.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
