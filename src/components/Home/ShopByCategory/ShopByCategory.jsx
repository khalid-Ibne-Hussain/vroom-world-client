import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, NavLink, Outlet } from 'react-router-dom';
import ToyCard from './ToyCard';


const ShopByCategory = () => {

    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Sports");

    useEffect(() => {
        fetch(`https://vroom-world-server.vercel.app/toys/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }, [activeTab]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        console.log(tabName);
    };


    return (
        <div>
            <div className='w-full max-w-screen-xl mx-auto px-4 my-32'>
                <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl my-10 text-center pb-4">Shop By Category</h2>

                <div data-aos="fade-up">


                    <nav className="flex text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow">

                        <Link onClick={() => handleTabClick("Sports")} className="w-full">
                            <p className={`${activeTab == "Sports" ? "  text-green-700 font-extrabold rounded" : ""} inline-block w-full p-4 bg-white  `}>Sports</p>
                        </Link>
                        <Link onClick={() => handleTabClick("Emergency")} className="w-full">
                            <p className={`${activeTab == "Emergency" ? " text-green-700 font-extrabold rounded" : ""} inline-block w-full p-4 bg-white  `}>Emergency</p>
                        </Link>
                        <Link onClick={() => handleTabClick("Vintage")} className="w-full">
                            <p className={`${activeTab == "Vintage" ? " text-green-700 font-extrabold rounded" : ""} inline-block w-full p-4 bg-white `}>Vintage</p>
                        </Link>
                    </nav>

                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 justify-items-center' >
                    {
                        toys?.map(toy => <ToyCard key={toy._id} toy={toy} activeTab={activeTab}></ToyCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ShopByCategory;