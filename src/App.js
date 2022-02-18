import React, { useState } from "react"
import "./App.css"
import Tooltip from "./Component/Tooltip"
import Header from "./Component/Header"

function App() {  
  const [isMailVisible, setIsMailVisible] = useState(false)
  const showMailTooltip = () => {
    setIsMailVisible(true)
  }
  const hideMailTooltip = () => {
    setIsMailVisible(false)
  }
  return (
    <div classMail="App">
      <Header />
      <form>
        <div style={{ width: "100%" }}>
          <label for="mail">Adresse email : </label>
          <Tooltip show={isMailVisible} content="L'adresse email fournit lors de l'inscription">
            <input type="email" name="mail" id="mail" onClick={showMailTooltip} onBlur={hideMailTooltip} />
          </Tooltip>
        </div>
        <div style={{ width: "100%" }}>
          <label for="password">Mot de passe : </label>
          <Tooltip >
            <input type="password" name="password" id="password"  />
          </Tooltip>
        </div>
        <div style={{ width: "100%" }}>
          <Tooltip >
            <a href="#" >Mot de passe oublié ?</a>
          </Tooltip>
        </div>
      </form>
    </div>
  )
}

export default App
