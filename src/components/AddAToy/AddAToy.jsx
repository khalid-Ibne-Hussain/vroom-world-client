import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

import useTitle from '../../hooks/useTitle';

// import { useForm } from 'react-hook-form';


const AddAToy = () => {
    const { user } = useContext(AuthContext);
    const [carCategory, setCarCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [rating, setRating] = useState('');
    useTitle('Add A Toy')

    const handleRating = (event) => {
        setRating(event.target.value);
    };

    const handleCarCategoryChange = (event) => {
        setCarCategory(event.target.value);
    };

    const handleSubCategoryChange = (event) => {
        setSubCategory(event.target.value);
    };


    const handleAddAToy = event => {
        event.preventDefault();
        const form = event.target;
        const carName = form.carName.value;
        const price = +form.price.value;
        const imgURL = form.imgURL.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const carCategory = form.carCategory.value;
        const subCategory = form.subCategory.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const toyDescription = form.toyDescription.value;
        // const sellerName = form.sellerName.value;
        const newToy = { carName, price, imgURL, rating, quantity, carCategory, subCategory, sellerName, sellerEmail, toyDescription };
        console.log(newToy);

        fetch('https://vroom-world-server.vercel.app/toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })




    }



    return (
        <div className='w-full max-w-screen-xl mx-auto px-4'>
            <header className=' flex items-center justify-around  h-40'>
                <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Add A Toy</h2>
            </header>
            <form onSubmit={handleAddAToy}>
                <div className='grid md:grid-cols-2 gap-3'>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Car Name</label>
                        <input type="text" id="toyName" name='carName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name" required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price ($)</label>
                        <input type="number" id="toyPrice" name='price' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="toy price " required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                        <input type="text" id="imgURL" name='imgURL' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="img URL" required />
                    </div>

                    {/*  */}
                    <div className=''>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Give Rating</label>
                        <select onChange={handleRating} type="number" value={rating} name='rating' id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                            <option >Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    {/*  */}
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Available Quantity</label>
                        <input type="number" id="quantity" name='quantity' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="quantity" required />
                    </div>
                    <div className="mb-6 flex gap-4">

                        <div className='w-1/2'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Car Category</label>
                            <select onChange={handleCarCategoryChange} value={carCategory} name='carCategory' id="carCategory" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                                <option >Category</option>
                                <option value="Sports">Sports</option>
                                <option value="Emergency">Emergency</option>
                                <option value="Vintage">Vintage</option>
                            </select>
                        </div>
                        {carCategory && (
                            <div className='w-1/2'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Sub Category</label>
                                <select onChange={handleSubCategoryChange} value={subCategory} id="subCategory" name='subCategory' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                                    <option value="">Sub Category</option>
                                    {carCategory === 'Sports' && (
                                        <>
                                            <option value="Super Cars">Super Cars</option>
                                            <option value="Muscle">Muscle Cars</option>
                                            <option value="Exotic">Exotic Sports Cars</option>
                                        </>
                                    )}
                                    {carCategory === 'Emergency' && (
                                        <>
                                            <option value="Ambulance">Ambulance</option>
                                            <option value="Fire Truck">Fire Truck</option>
                                            <option value="Police">Police</option>
                                        </>
                                    )}
                                    {carCategory === 'Vintage' && (
                                        <>
                                            <option value="Antique">Antique Cars</option>
                                            <option value="Classic">Classic Cars</option>
                                            <option value="Vintage-race">Vintage Race Cars</option>
                                        </>
                                    )}

                                </select>
                            </div>
                        )

                        }
                        {/* ************* */}

                        {/* ********************** */}

                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seller Name</label>
                        <input type="text" id="sellerName" name='sellerName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={user?.displayName} readOnly />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seller Email</label>
                        <input type="email" id="sellerEmail" name='sellerEmail' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={user?.email} readOnly />
                    </div>



                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toy Description</label>
                        <textarea name='toyDescription' id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="description" required></textarea>


                    </div>
                </div>
                <div className='p-5'>
                    <input type="submit" value="Add" className='btn btn-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full my-5 py-2.5 text-center' />
                </div>
            </form>
        </div>
    );
};

export default AddAToy;