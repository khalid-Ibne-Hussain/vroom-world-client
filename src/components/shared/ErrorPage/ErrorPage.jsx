import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const ErrorPage = () => {
    useTitle('error!')
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <img className='mx-auto' src="/404.gif" alt="404 gif file" />
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">

                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something missing.</p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page.</p>
                        <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"><Link to="/">Go Back Homepage</Link></button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorPage;