import React from 'react';

const ServiceDetailPage = ({params}) => {
    const id = params?.id;
    return (
        <div>
            <h2 className='text-3xl'>ServiceDetailPage</h2>
            <p className='text-3xl'>ID: {id}</p>
        </div>
    );
};

export default ServiceDetailPage; 