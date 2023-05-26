import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const ToyCard = ({ toy }) => {
    // console.log(toy);
    const { user } = useContext(AuthContext);
    const { imgURL, carName, price, rating, _id } = toy;

    // const handleTost=()=>{

    // }



    return (
        <div data-aos="fade-up">

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className=" rounded-t-lg h-64 w-96" src={imgURL} alt="product image" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{carName}</h5>
                    </a>
                    <div className="flex items-center justify-between">
                        <div className='flex items-center'>
                            <Rating style={{ maxWidth: 120 }} value={rating} readOnly></Rating>
                            <button className='bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-orange-400 my-4'>{rating}</button></div>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                        <Link to={`/toy/${_id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToyCard;