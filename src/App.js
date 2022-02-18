import "./App.css"
import Tooltip from "./Component/Tooltip"

function App() {
  return (
    <div className="App">
      <form>
        <div style={{ width: "100%" }}>
          <label for="lastname">Nom : </label>
          <Tooltip>
            <input type="text" name="lastname" id="lastname"  />
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
