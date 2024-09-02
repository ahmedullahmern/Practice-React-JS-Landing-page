const loggined = false


function Header({ header }) {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="font-extrabold flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={header.logo} alt=""
                        className='w-12 h-12 rounded-full' />
                    <span className="ml-3 text-xl">{header.title}</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="text-blue-500 mr-5 hover:text-gray-900">Home Page</a>
                    <a className="text-blue-500 mr-5 hover:text-gray-900">About Us</a>
                </nav>
                <button className='border  border-blue-400 px-3 py-1 rounded-md text-black'>{loggined ? "Logout" : " Login"}</button>
            </div>
        </header>

    )
}

export default Header;