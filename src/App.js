import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import PageNotFound from "./components/PageNotFound/PageNotFound"

function App() {
  return (
    <div className="app">
      <HashRouter>
        <section className="main">
        <NavBar />
        <Routes>
          <Route path="/" element={<div>
                                    <Home />
                                    </div>} />
          <Route path="/services" element={<div style={{margin:"15rem"}}>In progress</div>} />
          <Route path="/past-projects" element={<div style={{margin:"15rem"}}>In progress</div>} />
          <Route path="/testimonials" element={<div style={{margin:"15rem"}}>In progress</div>} />
          <Route path="/about" element={<div style={{margin:"15rem"}}>In progress</div>} />
          <Route path="/contact-us" element={<div style={{margin:"15rem"}}>In progress</div>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </section>
      </HashRouter>
    </div>
  )
}

export default App;
