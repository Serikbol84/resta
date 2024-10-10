
import { slidesData } from "./testimonialSliders/testimonialSliderData";
import TestimonialSlides from "./testimonialSliders/TestimonialSlides";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"



const TestimonialArea = () => {

    const settings = {
        dots: true, // Точки показывать снизу которые
        infinite: false, // бесконечная прокрутка (откл)
        speed: 500,
        slidesToShow: 2, // Показывать 2 слайда
        slidesToScroll: 2, // Прокручивать 2 слайда за раз
        // rows: 1, // Один ряд слайдов
        // arrows: false
    };

    return (
        <div className="tsetimonial-area overlay">
            <div className="container">
                <div className="tsetimonial-title">
                    <p>Testimonials</p>
                    <h3>Our Customer's Say</h3>
                </div>

                <div className="testimonial-active">
                    <Slider {...settings}>
                        {slidesData.map((slideData) => (
                            <TestimonialSlides key={slideData.id} testimonialSlideProps={slideData}/>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
 
export default TestimonialArea;