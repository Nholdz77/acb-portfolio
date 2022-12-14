import React from "react";
import "./testimonial.css";
import Avatar1 from "../../assets/img01.png";
import Avatar2 from "../../assets/img02.png";
import Avatar3 from "../../assets/img03.png";
import Avatar4 from "../../assets/img04.png";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const data = [
  {
    avatar: Avatar1,
    name: "Dlonra Aneclab",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae odit ipsam autem distinctio eligendi unde nesciunt? Quos beatae ipsam fugit?",
  },
  {
    avatar: Avatar2,
    name: "Nath Rosales",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae odit ipsam autem distinctio eligendi unde nesciunt? Quos beatae ipsam fugit?",
  },
  {
    avatar: Avatar3,
    name: "Harold Mark",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae odit ipsam autem distinctio eligendi unde nesciunt? Quos beatae ipsam fugit?",
  },
  {
    avatar: Avatar4,
    name: "Harold Lucas",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae odit ipsam autem distinctio eligendi unde nesciunt? Quos beatae ipsam fugit?",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
