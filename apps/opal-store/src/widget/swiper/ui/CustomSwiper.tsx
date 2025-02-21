import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";

type Props = {
  children: JSX.Element[];
};

const CustomSwiper = ({ children }: Props) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      modules={[Navigation, Pagination]}
      slidesPerView="auto"
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      style={{ width: "100%" }} // Swiper가 부모 너비를 상속
    >
      {children.map((el, index) => {
        return <SwiperSlide key={index}>{el}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default CustomSwiper;
