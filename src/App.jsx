import { useState } from "react";
import Startgame from "./components/Startgame";
import Gameplay from "./components/Gameplay";



function App() {
  const [Isgamestarted, setIsgamestarted] = useState(false)

  const toggleGameplay = () => {
    setIsgamestarted((prev ) => !prev)
  }
  return (
    <>
  {
    Isgamestarted ? <Gameplay/> : <Startgame toggle={toggleGameplay}/>
  }
    </>
  );
}

export default App;



