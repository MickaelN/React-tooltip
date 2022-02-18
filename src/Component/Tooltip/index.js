import React, { useState } from "react"
import "./index.css"

const Tooltip = ({ children, content, visible, hidden }) => {
    const [isVisible, setIsVisible] = useState(false)
    const position = "top"
    if (typeof visible === "object") {
        visible.map(item => {
            document.getElementById(children.props.id).addEventListener(item, () => {
                setIsVisible(true)
            })
        })
    }
    if (typeof hidden === "object") {
        hidden.map(item => {
            document.getElementById(children.props.id).addEventListener(item, () => {
                setIsVisible(false)
            })
        })
    }
    return (
        <React.Fragment>
            <div className="tooltip">{children}
                <div className="tooltiptext top" style={{ visibility: isVisible ? "visible" : "hidden" }}>
                    {content}
                </div>
            </div>
        </React.Fragment>
    );
}
export default Tooltip