import Aos from "aos"
import 'aos/dist/aos.css';
import About from "./components/About"
import Banner from "./components/Banner"
import Header from "./components/Header"
import Workout from "./components/Workout";

function App() {
  Aos.init({
    duration:2500,
    delay:400,
  })
  return (
    <>
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
     <Header/>
     <Banner/>
     <About/>
     <Workout/>
    </div>
    </>
  )
}

export default App
