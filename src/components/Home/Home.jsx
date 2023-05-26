import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import Service from './Service';
import BestSeller from './BestSeller';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner />
            <Gallery />
            <ShopByCategory />
            <BestSeller />
            <Service />
        </div>
    );
};

export default Home;