import { Button } from "react-bootstrap"

import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import LoginScreen from "./auth/login"
import RegisterScreen from "./auth/register"




function App() {
  

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />

      </Routes>
    </BrowserRouter>
     )
}

export default App
