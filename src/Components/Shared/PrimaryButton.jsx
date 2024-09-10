import { FaArrowRight } from "react-icons/fa"


const PrimaryButton = () => {
    return (
        <>
            <div className="flex items-center group">
                <button className="bg-rose-600 h-[40px] text-white px-3 py-2">
                    Choose your meal plan
                </button>
                <FaArrowRight className="inline-block group-hover:!translate-x-2 duration-200 bg-rose-800  text-white h-[40px] w-[40px]" />
            </div>
        </>
    )
}

export default PrimaryButton