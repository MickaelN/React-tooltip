import React, { useState } from "react"
import "./App.css"
import Tooltip from "./Component/Tooltip"

function App() {  
  const [isNameVisible, setIsNameVisible] = useState(false)
  const showNameTooltip = () => {
    setIsNameVisible(true)
  }
  const hideNameTooltip = () => {
    setIsNameVisible(false)
  }
  return (
    <div className="App">
      <form>
        <div style={{ width: "100%" }}>
          <label for="lastname">Nom : </label>
          <Tooltip show={isNameVisible}>
            <input type="text" name="lastname" id="lastname" onClick={showNameTooltip} onBlur={hideNameTooltip} />
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
