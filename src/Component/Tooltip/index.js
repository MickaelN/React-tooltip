import React, { useState, useEffect } from "react"
import "./index.css"
import parse from "html-react-parser"

const Tooltip = ({ children, content, visible, hidden, position }) => {
    const [isVisible, setIsVisible] = useState(false)
    const className = `tooltiptext ${position}` + (isVisible ? " visible" : " hidden")
    useEffect(() => {
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
    }, [])
    return (
        <React.Fragment>
            <div className="tooltip">{children}
                <div className={className} >
                    {typeof content === "string" ? parse(content) : content}
                </div>
            </div>
        </React.Fragment>
    );
}
export default Tooltip