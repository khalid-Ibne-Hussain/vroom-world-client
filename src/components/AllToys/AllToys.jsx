import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const [toys, setToys] = useState([]);

    const [search, setSearch] = useState('');
    console.log(search);

    useEffect(() => {
        fetch('https://vroom-world-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToys(data));

    }, [])

    // not more than 20 item can fetch because limit(20) set in the the server site.  
    // const toys = useLoaderData();
    console.log("Total Toys get from DB: ", toys.length);
    console.log("By default 20 items come by get req cause limit 20 set in server site.")
    // 

    useTitle('All Toys')

    return (
        <div className='w-full max-w-screen-xl mx-auto px-4 mb-20'>
            <header className=' flex items-center justify-around  h-40'>
                <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">All Toys: {toys.length}</h2>
            </header>
            <div className='shadow-lg mb-8'>

                <form onChange={(e) => setSearch(e.target.value)}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by toy name ....." required />

                    </div>
                </form>

            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg" data-aos="fade-up">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>

                            <th scope="col" className="px-6 py-3">
                                Seller
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Toy Name
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
                        toys.filter((toy) => {
                            return search.toLowerCase() === '' ? toy : toy.carName.toLowerCase().includes(search);
                        }).map(toy => (

                            <tbody key={toy._id}>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {toy.sellerName}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {toy.carName}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {toy.carCategory}
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
                                            <Button>View</Button>
                                        </Link>
                                    </td>
                                </tr>

                            </tbody>

                        ))

                    }
                </table>
            </div>
        </div>
    );
};

export default AllToys;