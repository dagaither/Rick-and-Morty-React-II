import { createBrowserRouter } from "react-router-dom"
import App from './App';
import HomePage from './pages/HomePage'
import Characters from './pages/Characters'
import Characters2 from './pages/Characters'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About'
import CharacterDetailsPage from './pages/CharacterDetailsPage'
import Favorites from './pages/Favorites'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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
            {
                path: "characterdetailspage/:id/",
                element: <CharacterDetailsPage />,
            },
            {
                path: "favorites/",
                element: <Favorites />,
            },
        ],
        errorElement: <ErrorPage />,
    }
]);

export default router;