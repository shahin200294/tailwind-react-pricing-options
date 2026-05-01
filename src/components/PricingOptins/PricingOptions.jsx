import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise);


    return (
        <div>
            <h2 className='text-5xl mt-40'>Get Our Membership</h2>
            <div>
                {

                    pricingData.map(pricing => <PricingCard
                        key={pricing.id}
                        pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;