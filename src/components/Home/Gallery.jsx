import React from 'react';

const Gallery = () => {
    return (
        <div className='w-full max-w-screen-xl mx-auto px-4 my-32'>
            <h2 className="pb-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl my-10 text-center">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div data-aos="fade-down-right">
                        <img className="h-auto max-w-full rounded-lg hover:animate-pulse" src="/toyimg/ca33.jpg" alt="" />
                    </div>
                    <div data-aos="fade-right">
                        <img className="h-auto max-w-full rounded-lg" src="/toyimg/ca16.jpg" alt="" />
                    </div>
                    <div data-aos="fade-up-right">
                        <img className="h-auto max-w-full rounded-lg" src="/toyimg/ca23.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div data-aos="fade-down">
                        <img className="h-auto max-w-full rounded-lg" src="/toyimg/ca24.jpg" alt="" />
                    </div>
                    <div data-aos="zoom-in">
                        <img className="h-auto max-w-full rounded-lg" src="/toyimg/ca41.jpg" alt="" />
                    </div>
                    <div data-aos="fade-up">
                        <img className="h-auto max-w-full rounded-lg" src="/toyimg/ca10.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div data-aos="fade-down">
                        <img className="h-auto max-w-full rounded-lg" src="/toyimg/ca36.jpg" alt="" />
                    </div>
                    <div data-aos="zoom-in">
                        <img className="h-auto max-w-full rounded-lg" src="/toyimg/ca15.jpg" alt="" />
                    </div>
                    <div data-aos="fade-up">
                        <img className="h-auto max-w-full rounded-lg" src="/toyimg/ca32.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4" >
                    <div data-aos="fade-down-left">
                        <img className="h-auto max-w-full rounded-lg" src="/toyimg/ca25.jpg" alt="" />
                    </div>
                    <div data-aos="fade-left">
                        <img className="h-auto max-w-full rounded-lg" src="/toyimg/ca34.jpg" alt="" />
                    </div>
                    <div data-aos="fade-up-left">
                        <img className="h-auto max-w-full rounded-lg" src="/toyimg/ca21.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallery;