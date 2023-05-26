import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { FaThumbsUp } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import useTitle from '../../hooks/useTitle';


const Details = () => {

    const toyDetail = useLoaderData();
    // console.log(toyDetail);
    const { carName, carCategory, subCategory, imgURL, price, quantity, rating, sellerEmail, sellerName, toyDescription, _id } = toyDetail;
    useTitle(`Details: ${carName}`);
    return (
        <div>
            <div className='max-w-screen-xl  justify-between mx-auto mb-8'>
                <header className='bg-slate-100 flex flex-col items-center justify-around md:flex-row p-4 gap-5 rounded-lg shadow-lg'>
                    <img className="rounded-lg  object-cover  md:w-1/2" src={imgURL} alt="" />
                    <div className='md:w-1/2'>
                        <h3 className='font-bold text-2xl mb-2'>{carName}</h3>

                        <div>
                            <h5 className='border-2 italic border-blue-200 rounded-lg p-2'>{toyDescription}</h5>
                        </div>
                        <div >
                            <h3 className='text-xl font-semibold'>Price: <span className='text-blue-600 font-bold text-2xl'>$ {price}</span></h3>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p><span className='font-semibold'>Available: </span><button className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 my-4'>{quantity}</button></p>

                        </div>
                        <div className='flex items-center justify-between'>
                            <p><span className='font-semibold'>Category: </span><button className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 my-4'>{carCategory}</button></p>
                            <p><span className='font-semibold'>SubCategory: </span><button className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 my-4'>{subCategory}</button></p>

                        </div>
                        <div className="flex items-center justify-between">
                            <h3><span className='font-semibold'>Seller: </span> {sellerName}</h3>
                            <div className='flex items-center'>
                                <Rating style={{ maxWidth: 120 }} value={rating} readOnly></Rating>
                                <button className='bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-orange-400 my-4'>{rating}</button></div>
                        </div>
                    </div>
                </header>
            </div>

        </div>
    );
};

export default Details;