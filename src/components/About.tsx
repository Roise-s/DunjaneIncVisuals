
const About = () => {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center" id="About">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        About Me
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block">
        Chris Dunjane is a professional photographer from the Free State. Started his photography journey in 2017 to date, mainly works with portraits and trend photography and has creative expertise in events and corporate photography.

        Motto
        "Your brand is our Identity"
      </p>

      <div className="mt-4 md:mt-8">
        <p
          className="inline-block rounded-sm bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition cursor-default focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
        >
          Whatsapp +27 67 088 8466
        </p>
      </div>
    </div>
  </div>

  <img
    alt=""
    src="/Fu4.jpg"
    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
  />
</section>
  )
}

export default About
