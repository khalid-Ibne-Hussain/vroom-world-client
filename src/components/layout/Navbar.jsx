import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
// import './Navbar.css'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div className='bg-slate-100'>

            <nav className=" mb-4 border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to="/" className="flex items-center">
                        <img className='w-12 h-12 mr-2 rounded-full' src="/logoCar.png" alt="logo" />
                        <span className="text-gray-900 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VroomWorld</span>
                    </NavLink>

                    <div className="flex md:order-2">


                        {
                            user && <div><img data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} className='w-10 h-10 mr-2 rounded-full' src={user?.photoURL} alt="" referrerPolicy='no-referrer' />
                                <Tooltip id="my-tooltip" />
                            </div>
                        }


                        {
                            user ? <NavLink to=""> <button onClick={handleLogOut} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ">Log Out</button> </NavLink> : <div>
                                <NavLink to="/login"> <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ">Login</button> </NavLink>
                                <NavLink to="/register"> <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  ml-2">Register</button> </NavLink>
                            </div>
                        }
                        {/* ******************************************** */}
                        {/* <div>
                            <NavLink to="/login"> <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ">Login</button> </NavLink>
                            <NavLink to="/register"> <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  ml-2">Register</button> </NavLink>
                        </div> */}


                        {/* ******************************* */}
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <NavLink
                                to="/" className="hover:underline block py-2 pl-3 pr-4 text-gray-900 bg-blue-700 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home
                            </NavLink>

                            <NavLink to="/blog" className="block hover:underline py-2 pl-3 pr-4 text-gray-900 rounded bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog
                            </NavLink>
                            <NavLink to="/allToys" className="block hover:underline py-2 pl-3 pr-4 text-gray-900 rounded bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">All Toys
                            </NavLink>
                            {
                                user && <>
                                    <NavLink to="/myToys" className="block hover:underline py-2 pl-3 pr-4 text-gray-900 rounded bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Toys
                                    </NavLink>
                                    <NavLink to="/addAToy" className="block hover:underline py-2 pl-3 pr-4 text-gray-900 rounded bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Add A Toy
                                    </NavLink>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;