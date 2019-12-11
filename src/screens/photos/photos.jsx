import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
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
            <Carousel dynamicHeight>
                { images.map( image => (
                    <div key={image.url}>
                        <img src={image.url} />
                    </div>
                )) }
            </Carousel>

            <p>Photos by <a href="http://www.brucethomsonphotography.com/">Bruce Thomson Photography</a></p>
        </div>
    );
}

export default Photos;
