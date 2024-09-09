import { FaCaretDown } from 'react-icons/fa';

const NavLinks = [
    {
        id: 1,
        name: 'Home',
        link: '/#',
    },
    {
        id: 2,
        name: 'About',
        link: '/#',
    },
    {
        id: 3,
        name: 'Contact',
        link: '/#',
    }
];

const DropdownLinks = [
    {
        id: 1,
        name: 'Vegetables',
        link: '/#'
    },
    {
        id: 2,
        name: 'Fruits',
        link: '/#'
    },
    {
        id: 1,
        name: 'Grains',
        link: '/#'
    },
]

const Navbar = () => {
    return (
        <div className="bg-white shadow-md">
            <div className="container flex justify-between py-4 sm:py-3">
                {/* logo section */}
                <div className="font-bold text-3xl">
                    logo
                </div>
                {/* navlinks section */}
                <div>
                    <ul className="flex items-center gap-10">
                        {
                            NavLinks.map(({ id, name, link }) => (
                                <li key={id}>
                                    <a href={link} className="inline-block hover:text-rose-600 text-xl font-semibold">{name}</a>
                                </li>
                            )
                            )
                        }
                        {/* dropdown */}
                        <li className='cursor-pointer group '>
                            <a href="#" className="inline-block hover:text-rose-600 text-xl font-semibold">
                                <div className='flex items-center gap-[2px] py-2'>
                                    Catagories
                                    <span>
                                        <FaCaretDown className=' group-hover:rotate-180 duration-300' />
                                    </span>
                                </div>

                            </a>
                            {/* dropdown item */}
                            <div className='absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md'>
                                
                                <ul>
                                    {
                                        DropdownLinks.map(({ id, name, link }) => (
                                            <li key={id}>
                                                <a href={link} className='inline-block hover:bg-rose-200 rounded-md p-2 text-xl font-semibold'>
                                                    
                                                    {name}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar