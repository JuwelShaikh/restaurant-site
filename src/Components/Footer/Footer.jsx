import { IoLocationSharp } from "react-icons/io5"


const Footer = () => {
    return (
        <>
            <div className="text-white mt-20">
                <div className="container bg-gradient-to-b from-rose-500 to-rose-700 rounded-t-3xl">
                    {/* contact section */}
                    <h1>
                        Contact us
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
                        <div>
                            <div>
                                <IoLocationSharp className="text-5xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer