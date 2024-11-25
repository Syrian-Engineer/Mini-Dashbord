import Navigation from "./components/NavigationTemplate/Navigation"
import "./App.css"
import { ThemeContext } from "./ThemeContext"
import { useEffect, useState } from "react"
import Main from "./Main/Main"
import Login from "./Login/Login"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./Config/FBConfig"
const App = () => {
  const [DarkTheme,setDarkTheme] = useState(true) // Default Theme is Light
  const [loggedIn,setLoggedIn] = useState(false);
    // Toggle function to change theme

    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(user){
          setLoggedIn(true)
        }else{
          setLoggedIn(false)
        }
      })
    },[])

  return (
    <ThemeContext.Provider value={{DarkTheme,setDarkTheme}}>
      <div className="App">
        {loggedIn ? <>
          <Navigation />
          <Main />
        </> : <Login />
        }
      </div>
    </ThemeContext.Provider>
  )
}

export default App