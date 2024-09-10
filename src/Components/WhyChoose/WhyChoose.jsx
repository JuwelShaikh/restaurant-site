import { FaBus } from "react-icons/fa"


const WhyChoose = () => {
    return (
        <>
            <div className="py-14 md:py-28 bg-gray-50">
                <div className="container">
                    {/* Heading section */}
                    <h1 className="pb-16 tracking-wider text-2xl font-semibold text-gray-600 text-center ">Why choose us</h1>

                    {/* card section */}
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
                            {/* list section */}
                            <div className="flex text-center justify-center items-center flex-col gap-2 px-2">
                                <p className="text-gray-600 font-semibold">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
                                </p>
                                <p className="text-5xl rotate-90 text-blue-500 translate-x-5">....</p>
                                <FaBus className="text-5xl text-rose-500"/>
                            </div>
                            <div className="flex text-center justify-center items-center flex-col gap-2 px-2">
                                <FaBus className="text-5xl text-blue-500"/>
                                <p className="text-5xl rotate-90 text-blue-500 translate-x-5">....</p>
                                <p className="text-gray-600 font-semibold">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
                                </p>
                            </div>
                            <div className="flex text-center justify-center items-center flex-col gap-2 px-2">
                                <p className="text-gray-600 font-semibold">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
                                </p>
                                <p className="text-5xl rotate-90 text-blue-500 translate-x-5">....</p>
                                <FaBus className="text-5xl text-rose-500"/>
                            </div>
                            <div className="flex text-center justify-center items-center flex-col gap-2 px-2">
                                <FaBus className="text-5xl text-blue-500"/>
                                <p className="text-5xl rotate-90 text-blue-500 translate-x-5">....</p>
                                <p className="text-gray-600 font-semibold">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChoose