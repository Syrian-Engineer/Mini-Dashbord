import React from "react"
import "./Nav.css"

interface Props{
    title:string,
    Icon: React.ComponentType; // Accepts any react-icon component}
    onClick?:()=>void
}

const Nav = ({title,Icon,onClick}:Props) => {
  return (
    <div className="nav" onClick={onClick}>
        {Icon && <Icon  />}
        <h2>{title ? title:null}</h2>
    </div>
  )
}

export default Nav