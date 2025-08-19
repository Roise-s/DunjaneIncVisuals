

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12 h-12">
            <img
                src="/logo.jpg"
                alt="DunjaneInc Visuals Logo"
                className="h-full w-auto object-contain ml-3.5"
            />
            </div>

            <div className="hidden md:block">
            <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
                <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
                </li>

                <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
                </li>

                <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                </li>
            </ul>
            </nav>
            </div>

            <div className="flex items-center gap-4">

            <div className="block md:hidden">
            <button
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            </div>
            </div>
            </div>
        </div>
        </header>
  )
}

export default Header
