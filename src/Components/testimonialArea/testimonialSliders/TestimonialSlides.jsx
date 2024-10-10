import React from "react";


const TestimonialSlides = ({ testimonialSlideProps }) => {
    return (
        <div className="single-carousel">
            <div className="single_testmonial">
                <div class="author_opinion">
                    <p>{testimonialSlideProps.authorsOpinion}</p>
                </div>
                <div className="testimonial_author">
                    <div class="thumb">
                        <img src={testimonialSlideProps.src} alt="Authors pic" />
                    </div>
                    <div className="name">
                        <h3>{testimonialSlideProps.authorsName}</h3>
                        <ul className="icon-star-row">
                            {Array(5).fill(null).map((_, index) => ( // создаём массив из 5 элементов (пустых значений)
                                <li className="icon-star" key={index}></li>
                            ))}; 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default TestimonialSlides;