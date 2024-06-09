// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import TestimonialItem from './TestimonialItem';

const TestimonailSlider = () => {

    const testimonialData = [
        {
            img: "images/testimonial-1.jpg",
            name: "Keena Lara",
            position: "Store Owner",
            quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam."
        },
        {
            img: "images/testimonial-2.jpg",
            name: "Afa Rose",
            position: "Web Designer",
            quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam."
        },
        {
            img: "images/testimonial-3.jpg",
            name: "Fizzi Brandon",
            position: "Freelancer",
            quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam."
        },
        {
            img: "images/testimonial-4.jpg",
            name: "Jhone Doe",
            position: "CFO",
            quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam."
        }
    ]

    return (
        <>
            <div className="swiper py-5 animation in-view fadeup w-100">
                <div className="text-center py-5">
                    <h2 className="color-text fw-normal ">Testimonials</h2>
                    <p className="desc-choose">Lorem ipsum dolor sit amet</p>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {testimonialData.map( (item ) => (
                        <SwiperSlide>
                            <TestimonialItem  {...item}  />
                        </SwiperSlide>
                    ))}
                    
                </Swiper>

            </div>
        </>
    );
}
export default TestimonailSlider; 