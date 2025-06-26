import { Button } from "react-bootstrap"

import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import LoginScreen from "./auth/login"
import RegisterScreen from "./auth/register"
import { HomeScreen } from "./home/home"
import { DetailScreen } from "./detail/detailScreen"


//945540308 913740377

function App() {
  

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/detail" element={<DetailScreen />} />

      </Routes>
    </BrowserRouter>
     )
}

export default App
