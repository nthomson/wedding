import React from 'react';
import './wedding.css';

const Wedding = () => {
    return (
        
        <div className='Wedding'>
            <div className='container'>
                <div className='flex-contain'>
                    <div className='col wedding-info'>
                        <p>Currently postponed due to COVID-19,</p>
                        <p>Ceremony: TBD</p>
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
