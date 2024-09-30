import dinner from "../../img/svg_icon/dinner.svg"
import cofee from "../../img/svg_icon/cofee.svg"
import fork from "../../img/svg_icon/fork.svg"
import "./style.css"

const DeliciousArea = () => {
    return (
        <div className="delicious-area">
            <div className="container">
                <div className="delicious-title">
                    <h3>Delicious Food For You</h3>
                </div>  
                
                <div className="tablist-menu">
                    <ul className="menu-nav">
                        <li className="nav-item">
                            <div className="nav-item-row">
                                <img src={dinner} alt="" /> 
                            </div>
                            <h4>Dinner</h4>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item-row">
                                <img src={cofee} alt="" /> 
                            </div>
                            <h4>Breakfast</h4>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item-row">
                                <img src={fork} alt="" /> 
                            </div>
                            <h4>Lunch</h4>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default DeliciousArea;