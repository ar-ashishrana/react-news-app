import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
