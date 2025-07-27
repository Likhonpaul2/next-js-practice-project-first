import Link from 'next/link';
import React from 'react';

const ServicesPage = () => {
    return (
        <div>
            <p className='font-bold text-3xl'>services page</p>
            <Link href={`/services/3`}>Details</Link>
        </div>
    );
};
  
export default ServicesPage;