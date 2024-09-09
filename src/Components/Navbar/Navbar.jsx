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
    },
];

const Navbar = () => {
    return (
        <div className="bg-white shadow-sm">
            <div className="container">
                {/* logo section */}
                <div className="font-bold">
                    logo
                </div>
                <div>
                    <ul>
                        {
                            NavLinks.map(({ id, name, link }) => {
                                <li key={id}>
                                    <a href={link}>{name}</a>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar