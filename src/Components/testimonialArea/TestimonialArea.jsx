
import author from "../../img/testimonial/author.png"
import "./style.css"

const TestimonialArea = () => {
    return (
        <div className="tsetimonial-area overlay">
            <div className="container">
                <div className="tsetimonial-title">
                    <p>Testimonials</p>
                    <h3>Our Customer's Say</h3>
                </div>

                <div className="testimonial-active">
                    <div className="single-carousel">
                        <div className="single_testmonial">
                            <div class="author_opinion">
                                <p>“Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor
                                    sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed
                                    neque.</p>
                            </div>
                            <div className="testimonial_author">
                                <div class="thumb">
                                    <img src={author} alt="Author pic" />
                                </div>
                                <div className="name">
                                    <h3>Robert Thomson</h3>
                                    <ul className="icon-star-row">
                                        <li className="icon-star"></li>
                                        <li className="icon-star"></li>
                                        <li className="icon-star"></li>
                                        <li className="icon-star"></li>
                                        <li className="icon-star"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default TestimonialArea;