import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaFacebookSquare, FaTwitter, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>

            <footer className="bg-slate-100 rounded-lg shadow-lg dark:bg-gray-900 my-4 py-8">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between md:pb-8" >
                        <Link to="/" className="grid items-center  sm:mb-0">
                            <img className='w-14 h-14 ml-4' src="/logoCar.png" alt="logo" />
                            <span className="text-gray-900 self-center text-xl font-semibold whitespace-nowrap dark:text-white">VroomWorld</span>
                        </Link>


                        <div className=''>
                            <h2 className="mr-4 
                            hover:underline md:mr-6 font-bold">Contact
                            </h2>
                            <div>
                                <p>Phone: 415-817-6034</p>
                                <p>Fax: 818-725-8519</p>
                            </div>
                        </div>
                        <div className=''>
                            <h2 className="mr-4 
                            hover:underline md:mr-6 font-bold ">Address
                            </h2>
                            <div>
                                <p>93 Valley Farms Road</p>
                                <p>San Bernardino, CA 92404</p>
                            </div>
                        </div>

                        <ul className="p-2 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">


                            <a href="https://www.facebook.com" className="mr-4 hover:underline md:mr-6 "><FaFacebook className='text-blue-500 font-bold text-xl'></FaFacebook>
                            </a>

                            <a href="https://twitter.com" className="mr-4 hover:underline md:mr-6 "><FaTwitter className='text-blue-700 font-bold text-xl'></FaTwitter>
                            </a>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a className="hover:underline">VroomWorld™</a>. All Rights Reserved.</span>
                </div>
            </footer>



        </>
    );
};

export default Footer;