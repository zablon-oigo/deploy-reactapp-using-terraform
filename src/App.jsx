import Aos from "aos"
import About from "./components/About"
import Banner from "./components/Banner"
import Header from "./components/Header"

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

    </div>
    </>
  )
}

export default App
