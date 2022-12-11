import { useRoutes } from "react-router-dom";
import Player from "./Components/player/Player";
import SideBar from "./Components/SideBar/SideBar";
import TopBar from "./Components/TopBar/TopBar";
import routes from "./router";
import { useState } from "react";
import './App.css'
function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  let sideMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }

  let router = useRoutes(routes)
  return (
    <>
      <TopBar openSideMenuFunc={sideMenuOpen} menuStatus={menuOpen} />
      <div className="mainContainer">
        <SideBar menuStatus={menuOpen} />
        {router}
        <Player />
      </div>
    </>
  );
}

export default App;
