import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../view/Home/Home";
import SongList from "../components/SongList/SongList";
import NotFound from "../view/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/songs', element: <SongList /> },
            { path: '*', element: <NotFound /> }
        ]
    }
]);