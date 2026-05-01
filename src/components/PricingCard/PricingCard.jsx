import React from 'react';

const PricingCard = ({pricing}) => {
    // console.log(pricing); 
    return (
        <div>
            {/* card header  */}
            <div>
                <h1 className='text-7xl'>{pricing.name}</h1>
                <h4 className='text-5xl'>{pricing.price}</h4>
            </div>
        </div>
    );
};

export default PricingCard;