import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import ImageCard from '../ImageCard/ImageBanner';
import Button from '../Button/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
import type { NavigationOptions } from 'swiper/types';

import style from'./Carousel.module.css';
import { useRef } from 'react';

function Carousel() {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <section className={style.carouselContainer}>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ 
                    clickable: true,
                 }}
                onBeforeInit={(swiper) => {
                    const navigation = swiper.params.navigation as NavigationOptions;
                    navigation.prevEl = prevRef.current;
                    navigation.nextEl = nextRef.current;
                }}
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
                            <div className={style.slide}>
                                <div className={style.imageContainer}>
                                    <ImageCard imageSrc={image.src} altText={image.alt} />
                                </div>
                                <div className={style.overlay}>
                                    <div className={style.content}>
                                        <span>BRILHE EM CADA MOMENTO</span>
                                        <h1>Joias que contam sua História</h1>
                                        <p>Peças exclusivas para momentos inesquecíveis.</p>

                                        <Button text="Conheça nossas coleções" />
                                    </div>
                                </div>
                            
                            </div>
                        </SwiperSlide>
                    )
                })}
                <div ref={prevRef}><ChevronLeft className={style.swiperBtnPrev} /></div>
                <div ref={nextRef}><ChevronRight  className={style.swiperBtnNext} /></div>
            </Swiper>
        </section>
    )
}

export default Carousel;
