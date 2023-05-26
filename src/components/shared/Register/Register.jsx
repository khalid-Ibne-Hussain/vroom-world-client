import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import useTitle from '../../../hooks/useTitle';


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const { updateUserData } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [photo, setPhoto] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, photo, password);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);

                navigate(from, { replace: true });

                updateUserData(name, photo)
                    .then((result) => {
                        console.log("profile updated")
                    })
                    .catch((error) => {
                        console.log(error);
                    })

            })
            .catch(error => {
                console.log(error);
            })

        // updateUserData(name, photo)
        //     .then(() => {
        //         console.log("profile updated")
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })

    }

    const handlePassword = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);
        if (passwordInput.length < 6) {
            setPasswordError("Password must be at-least 6 characters long")
        }
        else if (!/.+[A-Z].+/.test(passwordInput)) {
            setPasswordError("At-least one capital letter")
        }
        else {
            setPasswordError("");
        }
    };
    const handleAccepted = event => {
        // console.log(event.target.checked);
        setAccepted(event.target.checked);
    }

    useTitle('Register')

    return (
        <div>
            <section className=" dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link to=" " className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        VroomWorld
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="shadow-lg p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input onChange={handlePassword} type="password" name="password" id="password" placeholder="password" className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  ${password
                                        ? passwordError
                                            ? "border-red-500"
                                            : "border-green-500"
                                        : "border-gray-300 focus:border-blue-600"}`} required />
                                    {
                                        passwordError && <span className="text-red-500">{passwordError}</span>
                                    }
                                </div>

                                <div>
                                    <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                                    <input type="text" name="photo" id="photo" placeholder="Photo URL" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" to="/terms">Terms and Conditions</Link></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Register;