import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './photos.css';

const Photos = () => {
    const images = [
        { url: "/images/2.jpg" },
        { url: "/images/3.jpg" },
        { url: "/images/1.jpg" },
        { url: "/images/4.jpg" },
        { url: "/images/5.jpg" },
        { url: "/images/6.jpg" }
    ];
    return (
        <div className='container Photos'>
            <SimpleImageSlider
                    width={1000}
                    height={600}
                    images={images}
                />
        </div>
    );
}

export default Photos;
