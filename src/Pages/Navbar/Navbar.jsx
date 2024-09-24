


const Navbar = () => {
    const navItems = <>

        <li><a href="#">Home</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Contact Me</a></li>




    </>
    return (
        <header>
            <div className="navbar bg-slate-600 text-white max-[767.99px]:bg-transparent">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {
                                navItems
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl w-1/6 h-1/6 max-lg:w-1/3 max-lg:h-1/3"><img src="/public/images/all.png" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex bg-slate-600 text-white">
                    <ul className="menu menu-horizontal px-1">

                        {
                            navItems
                        }

                    </ul>
                </div>

            </div>
           
        </header>
    );
};

export default Navbar;