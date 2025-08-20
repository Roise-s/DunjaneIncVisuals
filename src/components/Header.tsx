import { Link, Element } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12 h-12">
                <Link className="h-full w-auto object-contain ml-3.5" to="Home" smooth={true} duration={500} offset={-50}> 
                    <img
                        src="/logo.jpg"
                        alt="DunjaneInc Visuals Logo"
                        className="h-full w-auto object-contain ml-3.5"
                    />    
                </Link>
            
            </div>

            <div className="hidden md:block">
            <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
                <li>
                    <Link className="text-gray-500 transition hover:text-gray-500/75 cursor-pointer" to="Collection" smooth={true} duration={500} offset={-50}> Collection </Link>
                </li>

                <li>
                     <Link className="text-gray-500 transition hover:text-gray-500/75 cursor-pointer" to="Services" smooth={true} duration={500} offset={-50}> 
                        Services
                    </Link>
                </li>

                <li>
                    <Link className="text-gray-500 transition hover:text-gray-500/75 cursor-pointer" to="About" smooth={true} duration={500} offset={-50}> 
                        About Me
                    </Link>
                </li>
            </ul>
            </nav>
            </div>

            <div className="flex items-center gap-4">
            </div>
            </div>
        </div>
        </header>
  )
}

export default Header
