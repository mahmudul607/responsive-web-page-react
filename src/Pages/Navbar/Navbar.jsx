

const Navbar = () => {
    return (
        <header>
        <nav className="navbar flex justify-between  items-center px-6 bg-slate-900 text-white">
            <a className="logo "><img className="w-2/12" src="../../../public/images/all.png" alt=""/></a>
            <ul className="nav_items flex gap-2 justify-center pr-12 ">
                <li><a href="#">Home</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Contact Me</a></li>
            </ul>
            <div className="menu_icon text-xl hidden">
                <div className="bar bg-black w-6 h-1 m-2"></div>
                <div className="bar bg-black w-6 h-1 m-2"></div>
                <div className="bar bg-black w-6 h-1 m-2"></div>
            </div>
        </nav>
    </header>
    );
};

export default Navbar;