import { FaPhone } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5"
import { MdEmail } from "react-icons/md"


const Footer = () => {
    return (
        <>
            <div className="text-white mt-20">
                <div className="container bg-gradient-to-b from-rose-500 to-rose-700 rounded-t-3xl">
                    {/* contact section */}
                    <h1 className="py-10 text-3xl font-bold text-yellow text-center">
                        Contact us
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">

                        {/* address section */}
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <IoLocationSharp className="text-5xl" />
                            </div>
                            <p>
                                #92, 3rd Main, Virgo Nagar, post <br /> seeghalli, Bangladesh, Dhaka-1205
                            </p>
                        </div>

                        {/* email section */}
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <MdEmail className="text-5xl"/>
                            </div>
                            <p>Juwelshaikh04@gmail.com</p>
                            <p>Myrestaurantsite@info.com</p>
                        </div>
                        {/* Phone section */}
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <FaPhone className="text-4xl"/>
                            </div>
                            <p>+123-30482274 - Sales Manager</p>
                            <p>+348-27462237 - Whatsapp</p>
                            <p>+348-27462919 - HR</p>
                        </div>
                    </div>
                    {/* CopyRight section */}
                    <div className="flex justify-between p-4 items-center p-4">
                        <p>2022 GoodFood. All rights received by <a href="https://www.facebook.com/juwel.shaikh">Juwel Shaikh</a></p>
                        <div className="flex items-center gap-6">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer