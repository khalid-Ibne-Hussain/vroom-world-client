import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Button, Label } from 'flowbite-react';
import Swal from "sweetalert2";
import useTitle from '../../hooks/useTitle';


const MyToys = () => {
    useTitle('My Toys')

    const { user } = useContext(AuthContext);
    // console.log(user.email);
    const [toys, setToys] = useState([]);
    const [asc, setAsc] = useState(true);
    //************************************

    // useEffect(() => {
    //     fetch(`https://vroom-world-server.vercel.app/myToy/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setToys(data));

    // }, [])

    //*************************************** 
    useEffect(() => {
        fetch(`https://vroom-world-server.vercel.app/myToy/${user.email}?sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setToys(data));

    }, [asc])




    // console.log(toys.length);

    const handleDelete = _id => {
        console.log(_id);
        //  solve button hover color
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                // console.log('delete confirm');
                fetch(`https://vroom-world-server.vercel.app/toy/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== _id);
                            setToys(remaining);
                        }
                    })
            }
        })
    }
    // onClick={handleSortByPrice}


    return (
        <div className='w-full max-w-screen-xl mx-auto px-4 mb-20'>
            <header className=' flex items-center justify-around  h-40'>
                <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">My Toys:{toys.length}</h2>
            </header>
            <div>
                <div className='sort flex justify-end mb-4'>
                    <button onClick={() => setAsc(!asc)} className='p-2 bg-slate-300 rounded-md shadow-xl '>
                        {asc ? "Price: H-L" : "Price: L-H"}
                    </button>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Img
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Toy Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Seller
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Seller-Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ctg
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Sub-Ctg
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Qty
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        {
                            toys.map(toy => (

                                <tbody key={toy._id}>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                                        <td className="w-32 p-4">
                                            <img src={toy.imgURL} alt="image" />
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {toy.carName}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {toy.sellerName}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {toy.sellerEmail}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {toy.carCategory
                                            }
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {toy.subCategory}
                                        </td>

                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            ${toy.price}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {toy.quantity}
                                        </td>

                                        <td className="px-6 py-4">
                                            <Link to={`/toy/${toy._id}`}>
                                                <Button className='px-1'>View</Button>
                                            </Link>
                                            <Link to={`/updateToy/${toy._id}`}>
                                                <Button className='my-1 px-2 bg-yellow-400'>Edit</Button>
                                            </Link>
                                            <Link to="">
                                                <Button onClick={() => handleDelete(toy._id)} className='bg-red-600'>Delete</Button>
                                            </Link>
                                        </td>
                                    </tr>

                                </tbody>

                            ))

                        }
                    </table>
                </div>

            </div>

        </div>
    );
};

export default MyToys;