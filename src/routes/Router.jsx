import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../view/Home/Home";
import SongList from "../components/SongList/SongList";
import Contact from "../view/Contact/Contact";
import NotFound from "../view/NotFound/NotFound";
import ApiSongCRUD from "../view/ApiCrud/ApiCrud";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/songs", element: <SongList /> },
      { path: "/crud", element: <ApiSongCRUD /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
