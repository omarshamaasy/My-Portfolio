import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Education from "../components/Education/Education"
import GoToContent from "../components/GoToContent/GoToContent"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"
import ScrollToTop from "../components/ScrollToTop/ScrollToTop"


const Home = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <About />
            <Education />
            <ScrollToTop />
            <GoToContent/>
            <Projects/>
            <Contact/>
            <Footer />
        </>
    )
}

export default Home
