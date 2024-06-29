import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home";
import Activities from "../Components/Activities";
import Projects from "../Components/Projects";
import About from "../Components/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: ([
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/activities",
                element: <Activities />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/about",
                element: <About />
            }
        ])
    }
])