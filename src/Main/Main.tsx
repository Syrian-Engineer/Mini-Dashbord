import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"
import "./Main.css"
import Header from "../components/HeaderTemplate/Header";
import Content from "../components/Content/Content";

const Main = () => {
    const context = useContext(ThemeContext);

    if (!context) {
      // If context is undefined, return null or handle the error
      throw new Error("useContext must be used within a ThemeContext.Provider");
    }
  
    const { DarkTheme } = context;

  return (
    <div className={`main ${DarkTheme && "dark"}`}> 
        <Header />

        <Content />
    </div>
  )
}

export default Main