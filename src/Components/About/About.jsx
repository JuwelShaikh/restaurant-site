import { FaUser } from 'react-icons/fa';
import BgPolygon from '../../assets/polygon.png'
import Vector from '../../assets/vector-wave.png';

const bgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    position: 'relative'
}

const About = () => {
    return (
        <>
            <div style={bgStyle} className='py-14 '>
                <div className="container min-h-[500px] relative z-10">
                    <h1 className="pt-20 tracking-wider text-4xl font-semibold text-white text-center">About us</h1>

                    {/* card section */}
                    <div className='bg-white/80 p-10 my-10'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ad voluptas veritatis hic laboriosam? Deleniti maxime quisquam id nobis, laboriosam libero necessitatibus tempore neque tempora labore reprehenderit sunt temporibus beatae explicabo nostrum quod laudantium! Et tenetur ipsam beatae iure! Voluptates aspernatur quis numquam facere impedit fuga eveniet omnis et nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam quam possimus dolores enim, in error quo excepturi fuga labore! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem qui vel ut recusandae fugit alias totam odio explicabo blanditiis, ipsum error velit autem impedit. Sed adipisci esse veniam accusantium! Consequuntur ipsum repellendus illo, vero, maiores ab, dolor alias totam rerum expedita earum? Obcaecati quo soluta blanditiis odit accusamus odio et!
                        <div className='pt-10 flex justify-center'>
                            <button className='flex justify-center items-center gap-2 bg-rose-500 text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300 rounded-md'>
                                <FaUser />
                                My account
                            </button>
                        </div>
                    </div>
                </div>

                {/* wave vector */}
                <div className='absolute top-0 right-0 w-full'>
                    <img src={Vector} alt="" className='mx-auto' />
                </div>
            </div>
        </>
    );
};

export default About;