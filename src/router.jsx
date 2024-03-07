import { createBrowserRouter } from "react-router-dom"
import App from './App';
import HomePage from './pages/HomePage'
import Characters from './pages/Characters'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "characters/",
                element: <Characters />,
            },
            {
                path: "about/",
                element: <About />,
            },
        ],
        errorElement: <ErrorPage />,
    }
]);

export default router;