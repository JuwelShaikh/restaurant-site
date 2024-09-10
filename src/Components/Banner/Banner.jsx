import Apple from '../../assets/png/apple.png'
import Kiwi from '../../assets/png/kiwi.png'
import Lemon from '../../assets/png/lemon.png'
import Leaf from '../../assets/png/leaf.png'
import Tomato from '../../assets/png/tomato.png'
import PrimaryButton from '../Shared/PrimaryButton'

const Banner = () => {
    return (
        <>
            <div className='container py-14 relative'>
                <div>
                    <h1 className='py-8 tracking-wider text-2xl font-semibold text-gray-700 text-center'>
                        Taste the healthy Difference
                    </h1>

                    {/* text content section */}
                    <div className='space-y-10'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                            <div>
                                <p>
                                    We know that <span className='text-rose-600 font-cursive'>time</span> is the greatest value in the modern world.
                                    Our healthy meal plan delivery service Good Food in Dhaka is the answer for those who want to eat healthily, saving time for buying food and preparing delicious, healthy meals
                                </p>
                            </div>
                            <div></div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                            <div></div>
                            <div>
                                <p>
                                    We know that <span className='text-rose-600 font-cursive'>time</span> is the greatest value in the modern world.
                                    Our healthy meal plan delivery service Good Food in Dhaka is the answer for those who want to eat healthily, saving time for buying food and preparing delicious, healthy meals
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* btn section */}
                    <div className='flex justify-center mt-10 sm:mt-14'>
                        <PrimaryButton/>
                    </div>
                </div>
                {/* bg fruits */}
                <div className='absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
                    <img src={Leaf} alt=""  className='max-w-[160px]'/>
                </div>
                <div className='absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
                    <img src={Tomato} alt=""  className='max-w-[280px]'/>
                </div>
                <div className='absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100'>
                    <img src={Lemon} alt=""  className='max-w-[200px]'/>
                </div>
                <div className='absolute hidden sm:block bottom-0 right-0'>
                    <img src={Apple} alt=""  className='max-w-[200px]'/>
                </div>
                <div className='absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100'>
                    <img src={Kiwi} alt=""  className='max-w-[180px]'/>
                </div>
            </div>
        </>
    )
}

export default Banner