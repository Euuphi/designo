import { Outlet } from "react-router-dom";
import ScrollToTop from "./utility/ScrollToTop";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

function App() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
