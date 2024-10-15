


const ImageModal = ({ selectedImageIndex, closeModal, nextImage, galleryDatas }) => {
    
    return (
        <>
        {selectedImageIndex !==null && 
            <figure className="modal" onClick={closeModal} >
                <div className="modal-content" onClick={(e) => e.stopPropagation()}> 
                    <span className="close-modal" onClick={closeModal}>&times;</span>
                    <img 
                        className="modal-pic" 
                        src={galleryDatas[selectedImageIndex].src} 
                        alt={galleryDatas[selectedImageIndex].alt} 
                        onClick={nextImage}
                    />
                    <figcaption>
                        <div className="counter">{selectedImageIndex + 1} of {galleryDatas.length}</div>
                    </figcaption>
                </div>
            </figure>
        }
        </>
    );
}
 
export default ImageModal;