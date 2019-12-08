import React from 'react';
import './wedding.css';

const Wedding = () => {
    return (
        
        <div className='Wedding'>
            <div className='container'>
                <div className='flex-contain'>
                    <div className='col wedding-info'>
                        <p>Friday October 23, 2020</p>
                        <p>Ceremony: 5:00pm</p>
                        <p>Reception immediately to follow</p>
                    </div>
                    <div className='col'>
                        <img src='/images/wedding.jpg' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wedding;
