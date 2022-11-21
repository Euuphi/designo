import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Locations from "@/pages/Locations";
import Contact from "@/pages/Contact";
import WebDesign from "@/pages/Services/WebDesign";
import AppDesign from "./pages/Services/AppDesign";
import GraphicDesign from "./pages/Services/GraphicDesign";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services">
                        <Route path="web-design" element={<WebDesign />} />
                        <Route path="app-design" element={<AppDesign />} />
                        <Route
                            path="graphic-design"
                            element={<GraphicDesign />}
                        />
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/locations" element={<Locations />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
