import React from 'react';
import './wedding.css';

const Wedding = () => {
    return (
        
        <div className='Wedding'>
            <div className='container'>
                <div className='flex-contain'>
                    <div className='col wedding-info'>
                        <p>Ceremony: October 23, 2021</p>
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
