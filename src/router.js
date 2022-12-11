import Favorite from "./page/Favorite/Favorite";
import Home from "./page/Home/Home";
import MusicPage from "./page/MusicPlayer/MusicPage";


let routes = [
    { path: '/', element: <Home /> },
    { path: '/favorite', element: <Favorite /> },
    { path: '/music/:musicID', element: <MusicPage /> },
]


export default routes