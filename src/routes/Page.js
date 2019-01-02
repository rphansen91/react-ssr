import React from "react"

export default ({ header, children, footer }) => (
    <div>
        {header && <div className="jumbotron rounded-0">
            {header}
        </div>}
        <div className="container">
            {children}
        </div>
        {footer && <div className="jumbotron mb-0 rounded-0">
            {footer}
        </div>}
    </div>
)