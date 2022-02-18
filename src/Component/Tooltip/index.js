import React from "react"
import "./index.css"

const Tooltip = ({ children, show }) => {
    return (
        <React.Fragment>
            {children}
            <p style={{ display: show ? "block" : "none" }}>Composant tooltip</p>
        </React.Fragment>
    );
}
export default Tooltip