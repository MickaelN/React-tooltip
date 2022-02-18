import React, { useState } from "react"
import "./App.css"
import Tooltip from "./Component/Tooltip"
import Header from "./Component/Header"

function App() {  
  const [isMailVisible, setIsMailVisible] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const showMailTooltip = () => {
    setIsMailVisible(true)
  }
  const hideMailTooltip = () => {
    setIsMailVisible(false)
  }
  const showPasswordTooltip = () => {
    setIsPasswordVisible(true)
  }
  const hidePasswordTooltip = () => {
    setIsPasswordVisible(false)
  }
  return (
    <div className="App">
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
          <Tooltip show={isPasswordVisible} content="Le mot de passe de votre compte">
            <input type="password" name="password" id="password"  onClick={showPasswordTooltip} onBlur={hidePasswordTooltip} />
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
