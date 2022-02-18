import React, { useState } from "react"
import "./index.css"

const Tooltip = ({ children, content, visible, hidden }) => {
    const [isVisible, setIsVisible] = useState(false)
    const position = "top"
    const className = `tooltiptext ${position}` + (isVisible ? " visible" : " hidden")
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
                <div className={className} >
                    {content}
                </div>
            </div>
        </React.Fragment>
    );
}
export default Tooltip