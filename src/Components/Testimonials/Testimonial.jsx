import React from "react";
import testimonialCSS from './../Testimonials/Testimonial.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Parallax } from "swiper/modules";

import img1 from './../../assets/shivam.png';

function Testimonial() {
    return (

        <div id="testimonials" className={`${testimonialCSS.testimonial_wrapper} section`}>
            <small className="section__Heading">Testimonials</small>
            <h2 className="section__Title">What Our Clients <span>Says</span></h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 1000,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                }}
                
                speed={1500}
                modules={[Autoplay]}
                className={testimonialCSS.swiper}
            >
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img1} alt="Shivam Raj" />
                        <div className={testimonialCSS.content}>
                            <h3>Shivam Raj <span>Manager</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa aliquid error obcaecati autem ex repellat debitis veniam omnis illum.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img1} alt="Shivam Raj" />
                        <div className={testimonialCSS.content}>
                            <h3>Shivam Raj <span>Manager</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa aliquid error obcaecati autem ex repellat debitis veniam omnis illum.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img1} alt="Shivam Raj" />
                        <div className={testimonialCSS.content}>
                            <h3>Shivam Raj <span>Manager</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa aliquid error obcaecati autem ex repellat debitis veniam omnis illum.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Testimonial;
