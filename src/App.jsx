import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  // API_URL=GET https://newsapi.org/v2/everything?q=Apple&from=2025-01-01&sortBy=popularity&apiKey=API_KEY

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
