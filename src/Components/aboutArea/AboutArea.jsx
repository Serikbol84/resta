import icon1 from "../../img/icon/1.png"
import icon2 from "../../img/icon/2.png"
import icon3 from "../../img/icon/3.png"
import salad from "../../img/svg_icon/salad.svg"
import tray from "../../img/svg_icon/tray.svg"
import big from "../../img/about/big.png"
import small from "../../img/about/small.png"
import "./style.css"

const AboutArea = () => {
    return (
        <div className="about-area">
            <div className="icon1">
                <img src={icon1} alt="" />
            </div>
            <div className="icon2">
                <img src={icon2} alt="" />
            </div>
            <div className="icon3">
                <img src={icon3} alt="" />
            </div>

            <div className="container">
                <div className="about-area-row">
                    <h3>Sed ut perspiciatis unde <br />
                        omnis iste natus</h3>
                    <span class="long_dash"></span>
                    <p>Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Exercitation photo booth stumptown tote bag todo Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation photo booth et 8-bit kale chips proident chillwave deep vow laborum. Aliquip veniam delectus, marfa eiusmod pinterest.</p>
                    
                    <div className="about-info-wrap">
                        <ul className="food-list">
                            <li>
                                <img src={salad} alt="salad" />
                                <span>Fresh Ingredients</span>
                            </li>
                            <li>
                                <img src={tray} alt="salad" />
                                <span>Expert cooker</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="about-area-img">
                    <div className="about-img">
                        <div className="big-img">
                            <img src={big} alt="big" className="big"/>
                        </div>
                        <div className="small-img">
                            <img src={small} alt="small" className="small"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AboutArea;