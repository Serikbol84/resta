

const GalleryPhotosPart = ({ galleryPhotoProps, handleClick }) => {
    return (
        <div className={`single-gallery ${galleryPhotoProps.size}`} >
            <img src={galleryPhotoProps.src} alt={galleryPhotoProps.alt} onClick={handleClick}/>
        </div>
        
    );
}
 
export default GalleryPhotosPart;