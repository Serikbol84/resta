
import DeliciousTabsContent from "./deliciousTabsContent/DeliciousTabsContent";
import { useState } from "react";
import contentData from "./deliciousTabsContent/contentData";
import "./style.css"

// Массив с объектами tabs которые мы замапили ниже, чтобы не дублировать элементы li
const tabs = [
    {id: 'dinner', iconCode: 'icon-of-dinner', text: 'Dinner'}, // icon-of-dinner, icon-of-breakfast, icon-of-lunch - в css передаем каждому соответствующий код иконки через контент
    {id: 'breakfast', iconCode: 'icon-of-breakfast', text: 'Breakfast'},
    {id: 'lunch', iconCode: 'icon-of-lunch', text: 'Lunch'}
];

const DeliciousArea = () => {
    const [activeTab, setActiveTab] = useState('dinner'); // Начальное состояние для табов. Поумолчанию это таб "dinner"

    return (
        <div className="delicious-area">
            <div className="container">
                <div className="delicious-title">
                    <h3>Delicious Food For You</h3>
                </div> 

                <div className="tablist-menu" role="tablist">
                    <ul className="menu-nav">
                        {tabs.map((tab) => (
                            <li 
                                className={`nav-item ${activeTab === tab.id ? 'active' : ''}`} //Условие
                                role="presentation" 
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <div className="nav-item-row" >
                                    <span className={`icon ${tab.iconCode}`}></span> {/* icon - здесь название класса (всеровно, что className="icon") */}
                                </div>
                                <h4>{tab.text}</h4>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <DeliciousTabsContent content={contentData[activeTab]}/>
            </div>
        </div>
    );
}
 
export default DeliciousArea;