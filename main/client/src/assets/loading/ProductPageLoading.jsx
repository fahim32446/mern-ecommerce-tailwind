import React from 'react'

const ProductPageLoading = () => {
    return (
        <div>
            <section className="text-gray-700 body-font overflow-hidden bg-white">

                <div className="container px-5 py-24 mx-auto">

                    <div className='animate-pulse'>


                        <div className="mx-auto flex flex-wrap justify-items-center ">
                            <div className="lg:w-1/3 p-5 flex justify-center items-center w-full object-cover object-center rounded-lg border border-gray-200" >

                                <svg className="w-100 h-12 text-red-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>

                            </div>

                            <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-10">

                                <div className="text-sm title-font text-gray-500 tracking-widest">
                                    <div className="h-2.5 bg-gray-200 rounded-full w-20 mb-4"></div>
                                </div>

                                <div className="text-gray-900 text-3xl title-font font-medium mb-5">
                                    <div className="h-2.5 bg-gray-200 rounded-full w-80 mb-4"></div>
                                </div>





                                <div className="flex flex-col mt-6 gap-6 pb-5 border-b-2 border-gray-200 mb-5">
                                    <div className="flex items-center content-center">
                                        <div className="h-2.5 bg-gray-200 rounded-full w-40 mb-1"></div>
                                    </div>


                                    <div className="flex items-center">

                                        <div className="h-2.5 bg-gray-200 rounded-full w-40 mb-2"></div>
                                    </div>

                                    <div className='flex flex-row items-center gap-2 select-none'>
                                    <div className="h-2.5 bg-gray-200 rounded-full w-80 mb-4"></div>
                                    <div className="h-2.5 bg-gray-200 rounded-full w-20 mb-4"></div>
                                    </div>

                                </div>

                                <div className="flex select-none" >
                                    <span className="title-font font-medium text-2xl text-gray-900 select-none">
                                    <div className="h-2.5 bg-gray-200 rounded-full w-60 mb-4"></div> </span>
                                    <div className="flex ml-auto text-white border-0 py-2 px-6 ">
                                    <div className="h-2.5 bg-green-300 rounded-full w-40 mb-4"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <hr />
                        <div className=' text-2xl mt-10 font-semibold'>
                        <div className="h-2.5 bg-gray-200 rounded-full w-80 mb-4"></div>
                        </div>
                        <div className="h-2.5 bg-gray-200 rounded-full w-full mb-4"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full w-full mb-4"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full w-full mb-4"></div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default ProductPageLoading