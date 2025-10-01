import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
import About from "./Pages/About";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Work />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
