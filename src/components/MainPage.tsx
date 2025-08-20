import { Link, Element } from 'react-scroll';

export default function MainPage() {
  return (
    <div id="Home">
        <div className="relative h-screen overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to DunjaneInc Visuals
            </h1>
            <p className="mt-4 text-xl text-gray-500">
                It's a great idea to have professional product photos taken by a professional photographer.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          alt=""
                          src="/Pro1.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="/Prm2.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="/Mrr2.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="Fu3.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="/Fu2.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="/Gra2.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="/Pro7.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700" to="Services" smooth={true} duration={500} offset={-50}> 
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}
