

import "./style.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "./testimonialSliderData";



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
                        {slides.map((slide) => (
                            <div className="single-carousel" key={slide.id}>
                                <div className="single_testmonial">
                                    <div class="author_opinion">
                                        <p>{slide.authorsOpinion}</p>
                                    </div>
                                    <div className="testimonial_author">
                                        <div class="thumb">
                                            <img src={slide.src} alt="Authors pic" />~
                                        </div>
                                        <div className="name">
                                            <h3>{slide.authorsName}</h3>
                                            <ul className="icon-star-row">
                                                {Array(5).fill(null).map((_, index) => ( // создаём массив из 5 элементов (пустых значений)
                                                    <li className="icon-star" key={index}></li>
                                                ))}; 
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
 
export default TestimonialArea;