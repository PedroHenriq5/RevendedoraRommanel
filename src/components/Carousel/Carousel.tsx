import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import ImageCard from '../ImageCard/ImageCard';

import img1 from "../../assets/Images/Image_Colares.png";
import img2 from "../../assets/Images/Image_Alianças.png";
import img3 from "../../assets/Images/Image_Brincos.png";

const images = [
    { src: img1, alt: "Slide 1" },
    { src: img2, alt: "Slide 2" },
    { src: img3, alt: "Slide 3" },
]

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import './Carousel.module.css';

function Carousel() {
    return (
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={900}
            >
                {images.map((image, index) => {
                    return(
                        <SwiperSlide key={index}>
                            <div>
                                <ImageCard imageSrc={image.src} altText={image.alt} />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
    )
}

export default Carousel;
