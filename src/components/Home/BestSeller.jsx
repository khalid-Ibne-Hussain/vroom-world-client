import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const BestSeller = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div className='max-w-screen-xl mx-auto p-4 mb-20'>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl my-10 text-center">Best Sellers</h2>
            <div className='grid md:grid-cols-3 gap-2 justify-items-center sm:gap-5'>

                <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up-right">
                    <a href="#">
                        <img className="rounded-t-lg " src="/toyimg/ca41.jpg" alt="" />
                        <button className='absolute top-4 left-4 bg-yellow-300 p-2 text-slate-900 rounded-md animate-pulse font-semibold'>20% Sale</button>
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Antique Retro Car</h5>
                        </a>
                        <div className='flex justify-between'>
                            <h3 className='text-slate-500 text-2xl font-bold '>$35</h3>
                            <h3 className='text-yellow-300 text-2xl font-bold animate-pulse'>Offer Price: $28</h3>

                        </div>

                    </div>
                </div>
                <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up">
                    <a href="#">
                        <img className="rounded-t-lg " src="/toyimg/ca40.jpg" alt="" />
                        <button className='absolute top-4 left-4 bg-yellow-300 p-2 text-slate-900 rounded-md animate-pulse font-semibold'>30% Sale</button>
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vintage Bike B6</h5>
                        </a>
                        <div className='flex justify-between'>
                            <h3 className='text-slate-500 text-2xl font-bold '>$45</h3>
                            <h3 className='text-yellow-300 text-2xl font-bold animate-pulse '>Offer Price: $31.5</h3>

                        </div>

                    </div>
                </div>
                <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up-left">
                    <a href="#">
                        <img className="rounded-t-lg" src="/toyimg/ca50.jpg" alt="" />
                        <button className='absolute top-4 left-4 bg-yellow-300 p-2 text-slate-900 rounded-md animate-pulse font-semibold'>25% Sale</button>
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vintage Taxi Cab</h5>
                        </a>
                        <div className='flex justify-between'>
                            <h3 className='text-slate-500 text-2xl font-bold '>$60</h3>
                            <h3 className='text-yellow-300 text-2xl font-bold animate-pulse'>Offer Price: $45</h3>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default BestSeller;