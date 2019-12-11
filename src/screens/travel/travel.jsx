import React from 'react';
import './travel.css';

const Travel = () => {
    return (
        <div className='container'>
            <div className='flex-contain'>
                <div className='col travel-info'>

                    <h2>Venue</h2>
                    <p>
                        Cross + Main<br />
                        Ceremony &amp; Reception<br />
                        201 E Main St, Youngsville, NC 27596
                    </p>
                    <p>
                        Parking can be found in a lot directly east of the venue. The lot's entrance is on Main Street.
                    </p>
                    < hr />
                    
                    <h2>Lodging</h2>
                    <p>For your convenience, a block of rooms has been reserved at the Hampton Inn in Wake Forest.
                        When calling to make your reservation, please mention the Thomson-McFarland wedding
                        in order to receive a discounted rate. Please call (919) 554-0222 to make your reservation.
                    </p>
                    <p>
                        <strong>Hampton Inn Wake Forest</strong> <br />
                        12318 Wake Union Church Rd, Wake Forest, NC 27587 <br />
                        (919) 554-0222
                    </p>
                    <p>
                        <strong>Fairfield Inn & Suites Wake Forest</strong><br />
                        12051 Retail Dr, Wake Forest, NC 27587<br />
                        (919) 435-7056
                    </p>
                    <p>
                        <strong>Candlewood Suites Wake Forest Raleigh Area</strong><br />
                        12050 Retail Dr, Wake Forest, NC 27587<br />
                        (919) 554-6901
                    </p>
                    < hr />

                    <h2>Airport</h2>
                    <p>
                        <strong>Raleigh-Durham International Airport</strong> <br />
                        2400 John Brantley Blvd, Morrisville, NC 27560</p>


                </div>
                <div className='col'>
                <iframe
                    src="https://www.google.com/maps/embed/v1/view?zoom=13&center=35.9799%2C-78.5097&key=AIzaSyA1iQC5Cfci6WNWC98kBHxLhNqyB-wLwOQ"
                    width="500"
                    height="650"
                    frameborder="0"
                    style={{border:0}}
                    className='travel-map'
                    allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
}

export default Travel;
