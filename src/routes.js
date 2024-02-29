import Home from "./pages/Home"
import Feats from "./pages/Feats"
import Feat from "./pages/Feat"
import Rules from "./pages/Rules"
import ErrorPage from "./pages/ErrorPage"
import exp from "constants"

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/feats",
        element: <Feats />,
        errorElement: <ErrorPage />
    },
    {
        path: "/rules",
        element: <Rules />,
        errorElement: <ErrorPage />
    },
    {
        path: "/feat/:id",
        element: <Feat />,
        errorElement: <ErrorPage />
    }
]
export default routes;