import HeroImg from '../../assets/hero.png'
import HeroBg from '../../assets/heroBg.png'
import PrimaryButton from '../Shared/PrimaryButton'


const bgStyle = {
    backgroundImage: `url(${HeroBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
}

const Hero = () => {
    return (
        <>
            <div data-aos="fade-up-right" style={bgStyle} className="">
                <div className="container p-16 sm:py-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
                        {/* textArea */}
                        <div className='space-y-7 text-gray-500 order-2 sm:order-1'>
                            <h1  className='text-5xl'>Fresh & healthy meal plan <span className='text-blue-400 font-cursive text-7xl'>Delivery</span><br /> in Dhaka</h1>
                            <p className='lg:pr-64'>Delicious meals delivered to your door at $100.00 per week</p>
                            {/* btnArea */}
                           <div className='cursor-pointer'>
                            <PrimaryButton/>
                           </div>
                        </div>
                        {/* imageArea */}
                        <div className='relative z-30 order-1 sm:order-2'>
                            <img src={HeroImg} alt="img1" className='w-full sm:translate-y-16 sm:scale-125' />
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Hero