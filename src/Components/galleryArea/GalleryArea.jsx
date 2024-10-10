

import { useState } from "react"
import firstSingleDish from "../../img/gallery/1.png"
import secondSingleDish from "../../img/gallery/2.png"
import thirdSingleDish from "../../img/gallery/3.png"
import fourthSingleDish from "../../img/gallery/4.png"
import fifthSingleDish from "../../img/gallery/5.png"
import sixthSingleDish from "../../img/gallery/6.png"
import "./style.css"

const GalleryArea = () => {
    const [selectedImage, setSelectedImage] = useState();

    const openModal = (openSelectedImage) => {
        setSelectedImage(openSelectedImage);
    }

    const closeModal = () => {
        setSelectedImage(null);
    }

    return (
        <div className="gallery-area">
            <div className="container">
                <div className="gallery-title-row">
                    <div className="gallery-title">
                        <h3>Photo Gallery</h3>
                    </div>
                </div>
                
            </div>
            <div className="gallery-row">
                <figure className="single-gallery big-photo" onClick={() => openModal(firstSingleDish)}>
                    <img src={firstSingleDish} alt="First pic" />
                </figure>
                <div className="single-gallery small-photo">
                    <img src={secondSingleDish} alt="Second pic" />
                </div>
                <div className="single-gallery small-photo">
                    <img src={thirdSingleDish} alt="Third pic" />
                </div>
                <div className="single-gallery small-photo">
                    <img src={fourthSingleDish} alt="Fourth pic" />
                </div>
                <div className="single-gallery small-photo">
                    <img src={fifthSingleDish} alt="Fifth pic" />
                </div>
                <div className="single-gallery big-photo">
                    <img src={sixthSingleDish} alt="Sixth pic" />
                </div>
            </div>
            {selectedImage && (
                <div className="modal" >
                    <span className="close-modal" onClick={closeModal}>x</span>
                    <img src={selectedImage} alt="" />
                </div>
            )}
        </div>
    );
}
 
export default GalleryArea;