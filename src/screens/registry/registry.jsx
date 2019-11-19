import React, { useEffect } from 'react';
import './registry.css';

const Registry = () => {
    return (
        <div className='container'>
            <iframe src='https://www.myregistry.com/ExternalApps/EmbededVistorView/v2/Visitors/GiftList.aspx?registryId=2189673&pageSize=10000' />
        </div>
    );
}

export default Registry;
