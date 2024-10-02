
// import contentData from "./contentData";
import "./style.css"


const DeliciousTabsContent = ({ content }) => {
    return (
        <div className="delicious-tabs-content">
            {content.map((item) => (
                <div className="single-delicious-card" key={item.id}>
                    <div className="single-delicious">
                        <div className="delicious-pic">
                            <img src={item.src} alt={item.alt} />
                        </div>
                        <div className="delicious-info">
                            <h3>{item.position}</h3>
                            <p>{item.description}</p>
                            <span>{item.price}</span>
                        </div>
                    </div>
                </div>
           ))}
        </div>
    );
}
 
export default DeliciousTabsContent;