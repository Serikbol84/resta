import dinner from "../../img/svg_icon/dinner.svg"
import cofee from "../../img/svg_icon/cofee.svg"
import fork from "../../img/svg_icon/fork.svg"
import "./style.css"
import DeliciousTabsContent from "./deliciousTabsContent/DeliciousTabsContent";

const tabs = [
    {src: dinner, alt: 'Dinner icon', text: 'Dinner'},
    {src: cofee, alt: 'Cofee icon', text: 'Breakfast'},
    {src: fork, alt: 'Fork icon', text: 'Lunch'}
];

const DeliciousArea = () => {
    return (
        <div className="delicious-area">
            <div className="container">
                <div className="delicious-title">
                    <h3>Delicious Food For You</h3>
                </div> 

                <div className="tablist-menu" role="tablist">
                    <ul className="menu-nav">
                        {tabs.map((tab, index) => (
                            <li className="nav-item" role="presentation" key={index}>
                                <div className="nav-item-row">
                                    <img 
                                        src={tab.src} 
                                        alt={tab.alt} 
                                        role="tab" 
                                        tabIndex="0" 
                                        onClick={() => console.log(`${tab.text} tab clicked`)} 
                                    /> 
                                </div>
                                <h4>{tab.text}</h4>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* <div className="tablist-menu" role="tablist">
                    <ul className="menu-nav">
                        <li className="nav-item" role="presentation">
                            <div className="nav-item-row">
                                <img 
                                    src={dinner} 
                                    alt="Dinner icon" 
                                    role="tab" 
                                    tabIndex="0" 
                                    onClick={() => console.log('Dinner tab clicked')} 
                                /> 
                            </div>
                            <h4>Dinner</h4>
                        </li>
                        <li className="nav-item" role="presentation">
                            <div className="nav-item-row">
                                <img 
                                    src={cofee} 
                                    alt="Cofee icon"
                                    role="tab"
                                    tabIndex="0"
                                    onClick={() => console.log('Cofee tab clicked')} 
                                /> 
                            </div>
                            <h4>Breakfast</h4>
                        </li>
                        <li className="nav-item" role="presentation">
                            <div className="nav-item-row">
                                <img src={fork} 
                                    alt="Fork icon" 
                                    role="tab"
                                    tabIndex="0"
                                    onClick={() => console.log('Fork tab clicked')}
                                /> 
                            </div>
                            <h4>Lunch</h4>
                        </li>
                    </ul>
                </div> */}

                <DeliciousTabsContent />
            </div>
        </div>
    );
}
 
export default DeliciousArea;