import { useContext } from "react"
import "./Header.css"
import { ThemeContext } from "../../ThemeContext"
import { BiSearch } from "react-icons/bi"
import { AiOutlineUser } from "react-icons/ai"
import { TbMessage } from "react-icons/tb"
import { IoAnalytics } from "react-icons/io5"
import { HiOutlineLogout, HiOutlineMoon } from "react-icons/hi"
import { RiSettingsLine } from "react-icons/ri"
import { MdLightMode } from "react-icons/md";
import { signOut } from "firebase/auth"
import { auth } from "../../Config/FBConfig"

const Header = () => {
    const context = useContext(ThemeContext)

    if(!context)
    {
        throw new Error("Error")
    }

    const{DarkTheme ,setDarkTheme} = context

    const changeTheme = ()=>{
        setDarkTheme(!DarkTheme)
    }

    const logOut = ()=>{
        signOut(auth)
    }
  return (
        <header className={`${DarkTheme && "dark"}`}>
            <div className="search-bar">
                <input type="text" placeholder="search..." />
                <BiSearch className="icon"/>
            </div>
            <div className="tools">
                    <AiOutlineUser className="icon"/>
                    <TbMessage     className="icon"/>
                    <IoAnalytics   className="icon" />
                <div className="divider"></div>
                    {!DarkTheme ?
                    <HiOutlineMoon className="icon" onClick={changeTheme}/> :
                    <MdLightMode className="icon" onClick={changeTheme}/>
                    }
                    <RiSettingsLine className="icon"/>
                    <HiOutlineLogout className="icon" onClick={logOut}/>
                <div className="divider"></div>
                <div className="user">
                </div>
            </div>
        </header>
  )
}

export default Header