import "./Testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "TaskFlow has completely transformed the way we manage projects. Everything is faster, cleaner, and much easier to organize.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The AI features save our team hours every week. It has become an essential part of our workflow.",
  },
  {
    name: "Emily Davis",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Best project management platform we've ever used. Beautiful UI and incredibly productive.",
  },
  {
    name: "David Wilson",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "Our entire development process became much smoother after switching to TaskFlow.",
  },
  {
    name: "Jessica Lee",
    role: "UI Designer",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    review:
      "Simple, elegant and packed with features. The dashboard is amazing.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <span className="testimonial-badge">TESTIMONIALS</span>

      <h2>
        Loved by <span>teams worldwide</span>
      </h2>

      <div className="testimonial-slider">
        <button className="custom-prev">
          <FaArrowLeft />
        </button>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          centeredSlides={false}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
              navigation: false,
            },
            576: {
              slidesPerView: 1,
              spaceBetween: 20,
              navigation: false,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="review">"{item.review}"</p>

                <div className="client">
                  <img src={item.image} alt={item.name} />

                  <div>
                    <h4>{item.name}</h4>

                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="custom-next">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
