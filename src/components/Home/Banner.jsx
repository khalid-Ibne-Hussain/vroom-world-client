import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="w-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 ">
            <div>
                <section className="w-full object-cover rounded-md bg-center bg-no-repeat bg-[url('https://hips.hearstapps.com/hmg-prod/images/electric-cars-kids-1627486155.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*')] bg-gray-500 bg-blend-multiply">
                    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48" data-aos="fade-up">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">Car Worlds For Children.</h1>
                        <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48">A sports toy car is a specialized type of toy car that is designed to mimic the appearance and performance of sports or racing cars. These miniature vehicles capture the excitement and speed associated with high-performance.</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <Link to="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                More
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Banner;