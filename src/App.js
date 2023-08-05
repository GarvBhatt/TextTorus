import { useState } from "react";
import Header from "./MyComponents/Header";
import TheForm from "./MyComponents/TheForm";
import Alert from "./MyComponents/Alert";

function App() {
  const [mode, setmode] = useState(!true);
  const [TheAlert, setTheAlert] = useState();
  // uhj
  const showTheAlert = (TheAlertAsParametre)=>
  {
    setTheAlert(TheAlertAsParametre);
    setTimeout(()=>
    {
        setTheAlert("");
    },2500);
  }
  document.body.style.backgroundColor=(mode)?"#042743":"white";

  const getmode = (currMode)=> (currMode)?"#272727":"white";
  const TextStyle = 
  {
    color:getmode(!mode)
  }

  const backgroundStyle =
  {
    backgroundColor:getmode(mode),
  }

  const handelOnclickForMode = ()=>
  {
    setmode(!mode);
    showTheAlert(`${(mode)?"Light":"Dark"} Mode Activatied`);
  }

  return (
    <>
      <Header title={"TextTorus"} mode={mode} TextStyle={TextStyle} backgroundStyle={backgroundStyle} handelOnclickForMode={handelOnclickForMode}/>
      <Alert TheAlert={TheAlert}/>
      <TheForm showTheAlert={showTheAlert} mode={mode} TextStyle={TextStyle} backgroundStyle={backgroundStyle}/>
    </>
  );
}

export default App;