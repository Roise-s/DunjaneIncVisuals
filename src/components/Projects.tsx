
const Projects = () => {
  return (
    <section id="Collection">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Our Photoshoot Collection</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-500">
        A showcase of life’s most meaningful moments, captured with care and artistry.
        From milestones to everyday beauty, each photoshoot tells a unique story worth remembering.
      </p>
    </header>

    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="/Gra1.jpg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <p className="mt-2">
              <span className="tracking-wider text-gray-900">Graduation photoshoot</span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="/Prm1.jpg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <p className="mt-2">
              <span className="tracking-wider text-gray-900">Prom Photoshoot</span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="/Mrr1.jpg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">

            <p className="mt-2">

              <span className="tracking-wider text-gray-900">Wedding Photoshoot</span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="/Mt1.jpg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">

            <p className="mt-2">

              <span className="tracking-wider text-gray-900">Maternity Photoshoot</span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="/Em.png"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">

          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="/St1.jpg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">

            <p className="mt-2">

              <span className="tracking-wider text-gray-900">Studio Photoshoot</span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="/Fu1.jpg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">

            <p className="mt-2">

              <span className="tracking-wider text-gray-900">Funerals Photoshoot</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>
  )
}

export default Projects
