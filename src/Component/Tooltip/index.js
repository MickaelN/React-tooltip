import React from "react"
import "./index.css"

const Tooltip = ({ children }) => {
    return (
        <React.Fragment>
            {children}
            <p>Composant tooltip</p>
        </React.Fragment>
    );
}
export default Tooltip