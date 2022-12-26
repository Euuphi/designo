import React from "react";
import ReactDOM from "react-dom/client";
// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Components
import App from "./App";
import "@/styles/index.css";
// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Locations from "@/pages/Locations";
import Contact from "@/pages/Contact";
import WebDesign from "@/pages/Services/WebDesign";
import AppDesign from "./pages/Services/AppDesign";
import GraphicDesign from "./pages/Services/GraphicDesign";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "services",
                children: [
                    {
                        path: "web-design",
                        element: <WebDesign />,
                    },
                    {
                        path: "app-design",
                        element: <AppDesign />,
                    },
                    {
                        path: "graphic-design",
                        element: <GraphicDesign />,
                    },
                ],
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "locations",
                element: <Locations />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
