import React from "react"
import "./App.css"
import Tooltip from "./Component/Tooltip"
import Header from "./Component/Header"
import Test from "./Component/Test"

function App() {  
 
  return (
    <div className="App">
      <Header />
      <form>
        <div style={{ width: "100%" }}>
          <label htmlFor="mail">Adresse email : </label>
          <Tooltip content="L'adresse email fournit lors de l'inscription" visible={["click"]} hidden={["blur"]} position="top">
            <input type="email" name="mail" id="mail" />
          </Tooltip>
        </div>
        <div style={{ width: "100%" }}>
          <label htmlFor="password">Mot de passe : </label>
          <Tooltip  content="<p>Le <strong>mot de passe</strong> de votre compte</p>" visible={["click"]} hidden={["blur"]} position="right">
            <input type="password" name="password" id="password" />
          </Tooltip>
        </div>
        <div style={{ width: "100%" }}>
          <Tooltip visible={["mouseover"]} hidden={["mouseout"]} content={<Test/>} position="bottom">
            <a href="#" id="lostPassword">Mot de passe oublié ?</a>
          </Tooltip>
        </div>
      </form>
    </div>
  )
}

export default App
