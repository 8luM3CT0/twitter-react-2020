import React from 'react'
import './SidebarOption.css'

function SidebarOption({ active ,text, Icon}) {
    return (
        <div className={`sidebarOption ${active && 'active'}`}>
            <Icon className="sidebarOption__icon" />    
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption
