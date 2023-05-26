import React from 'react';

const Service = () => {
    return (
        <div className='max-w-screen-xl mx-auto p-4 mb-20' >
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl my-10 text-center">Services</h2>
            <div className='grid md:grid-cols-3 justify-around justify-items-center gap-8 md:gap-0' data-aos="fade-up">
                <div>
                    <img src="/free.jpg" alt="" className='w-28 animate-bounce' />
                    <h3 className='text-lg font-semibold'>Free Shipping</h3>
                    <p className='text-slate-500'>Don't worry! The <br />
                        orders always arrive <br />
                        on time.
                    </p>
                </div>
                <div>
                    <img src="/return.jpg" alt="" className='w-28 animate-bounce' />
                    <h3 className='text-lg font-semibold'>Free Returns</h3>
                    <p className='text-slate-500'>All returns are <br />
                        subject to verification <br />
                        of original sale.
                    </p>
                </div>
                <div>
                    <img src="/card.png" alt="" className='w-28 animate-bounce' />
                    <h3 className='text-lg font-semibold'>Gift Card</h3>
                    <p className='text-slate-500'>Don't worry! The <br />
                        orders always arrive <br />
                        on time.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Service;