import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainPage from '@/components/MainPage'
import Projects from '@/components/Projects'
import Services from '@/components/Services'

const Home = () => {
  return (
    <div className='mt-20 hide-scrollbar'>
     <Header />
     <MainPage />
     <Projects />
     <Services />
     <About />
     <Footer />
    </div>
  )
}

export default Home
