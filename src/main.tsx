import React from "react";
import ReactDOM from "react-dom/client";
import loadable from "@loadable/component";
// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Components
import App from "./App";
import "@/styles/index.css";

// Lazy load pages
const Home = loadable(() => import("@/pages/Home"));
const About = loadable(() => import("@/pages/About"));
const Locations = loadable(() => import("@/pages/Locations"));
const Contact = loadable(() => import("@/pages/Contact"));
const WebDesign = loadable(() => import("@/pages/Services/WebDesign"));
const AppDesign = loadable(() => import("@/pages/Services/AppDesign"));
const GraphicDesign = loadable(() => import("@/pages/Services/GraphicDesign"));

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
