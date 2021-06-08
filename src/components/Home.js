import React from 'react';
import Section from './Section';

function Home() {
    return (
        <div>
            <Section 
                title="Model S"
                description="Order Online for touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Exting invertory"
            />
            <Section 
                title="Model Y"
                description="Order Online for touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Exting invertory"
            />
            <Section 
                title="Model 3"
                description="Order Online for touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Exting invertory"
            />
            <Section 
                title="Model X"
                description="Order Online for touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Exting invertory"
            />
        </div>
    )
}

export default Home
