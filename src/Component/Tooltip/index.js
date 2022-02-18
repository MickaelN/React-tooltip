import React from "react"
import "./index.css"

const Tooltip = ({ children, show, content }) => {
    const position = "top"
    return (
        <React.Fragment>
            <div className="tooltip">{children}
                <div className="tooltiptext top" style={{ visibility: show ? "visible" : "hidden" }}>
                        {content}
                </div>
            </div>
        </React.Fragment>
    );
}
export default Tooltip