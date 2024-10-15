import { useEffect, useState } from "react"
import GalleryPhotosPart from "./galleryContent/GalleryPhotosPart";
import ImageModal from "./ImageModal";
import { galleryDatas } from './galleryContent/galleryData'

import "./style.css"


const GalleryArea = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false) // Новое состояние для отслеживания открытия модалки

    useEffect(() => {
        function handleEscapeKey(event) { 
            if (event.code === 'Escape' && isModalOpen) { // Проверяем, открыта ли модалка
                closeModal()
            }
        }
        document.addEventListener('keydown', handleEscapeKey)
        return () => document.removeEventListener('keydown', handleEscapeKey)
    }, [isModalOpen]) // Добавляем isModalOpen в зависимости

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true) // Устанавливаем состояние модалки как открытое
        document.body.classList.add('no-scroll'); //останавливает прокрутку фона при открытии модалки
    }

    const closeModal = () => {
        setSelectedImageIndex(null);
        setIsModalOpen(false) // Устанавливаем состояние модалки как закрытое
        document.body.classList.remove('no-scroll'); //убираем остановку прокрутки после закрытия модалки
    }

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % galleryDatas.length; // Увеличиваем индекс и циклично возвращаемся к 0
            return nextIndex;
        });
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
                {galleryDatas.map((galleryData, index) => (
                    <GalleryPhotosPart 
                        key={galleryData.id} 
                        galleryPhotoProps={galleryData} 
                        handleClick={ () => openModal(index) } 
                    /> 
                ))}
            </div>

            <ImageModal 
                selectedImageIndex={selectedImageIndex}
                closeModal={closeModal}
                nextImage={nextImage}
                galleryDatas={galleryDatas}
            />
        </div>
    );
}
 
export default GalleryArea;