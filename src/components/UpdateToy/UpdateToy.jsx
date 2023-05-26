import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";
import useTitle from '../../hooks/useTitle';

const UpdateToy = () => {
    const toy = useLoaderData();
    console.log(toy);
    const { carName, price, imgURL, rating, quantity, carCategory, subCategory, sellerName, sellerEmail, toyDescription, _id } = toy;

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const price = +form.price.value;
        const quantity = form.quantity.value;
        const toyDescription = form.toyDescription.value;

        const updateToy = { price, quantity, toyDescription };
        console.log(updateToy);

        //  send data to the server
        fetch(`https://vroom-world-server.vercel.app/toy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })



    }
    useTitle('Update Toy')
    return (
        <div className='w-full max-w-screen-xl mx-auto px-4'>
            <header className=' flex items-center justify-around  h-40'>
                <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Update Toy</h2>
            </header>
            <form onSubmit={handleUpdateToy}>
                <div className='grid md:grid-cols-2 gap-3'>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Car Name</label>
                        <input type="text" id="toyName" name='carName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name" value={carName} required readOnly />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span className='text-orange-500 font-bold text-xl'>*</span> Price ($)</label>
                        <input type="number" id="toyPrice" name='price' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="toy price " defaultValue={price} required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                        <input type="text" id="imgURL" name='imgURL' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="img URL" value={imgURL} required readOnly />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                        <input type="number" id="rating" name='rating' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="toy rating" value={rating} required readOnly />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span className='text-orange-500 font-bold text-xl'>*</span> Available Quantity</label>
                        <input type="number" id="quantity" name='quantity' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="quantity" defaultValue={quantity} required />
                    </div>
                    <div className="mb-6 flex gap-4">

                        <div className='w-1/2'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Car Category</label>
                            <input type="text" id="carCategory" name='carCategory' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="carCategory" value={carCategory} required readOnly />
                        </div>

                        <div className='w-1/2'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sub Category</label>
                            <input type="text" id="subCategory" name='subCategory' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="sub category" value={subCategory} required readOnly />

                        </div>

                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seller Name</label>
                        <input type="text" id="sellerName" name='sellerName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={sellerName} readOnly />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seller Email</label>
                        <input type="email" id="sellerEmail" name='sellerEmail' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={sellerEmail} readOnly />
                    </div>



                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span className='text-orange-500 font-bold text-xl'>* </span> Toy Description</label>
                        <textarea name='toyDescription' id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" defaultValue={toyDescription} placeholder="description" required></textarea>

                    </div>
                </div>
                <div className='text-center mt-5 text-lg'>NB: You can update only (<span className='text-orange-500 font-bold text-xl'>*</span>) marks property.</div>
                <div className='p-5'>
                    <input type="submit" value="Update" className='btn btn-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full my-5 py-2.5 text-center' />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;