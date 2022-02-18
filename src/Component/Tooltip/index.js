import React from "react"
import "./index.css"

const Tooltip = ({ children, show, content }) => {
    return (
        <React.Fragment>
            {children}
            <p style={{ display: show ? "block" : "none" }}>{content}</p>
        </React.Fragment>
    );
}
export default Tooltip