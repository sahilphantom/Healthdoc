import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

function App() {

  return (
    <div className="font-lato">
          <Router>
      <main className="min-h-screen ">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
          
        </Routes>
        <Footer />
      </main>
    </Router>
    
    </div>
    
  )
}

export default App
