import React from "react"
import { AuthProvider } from "./components/contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './styles/main.css'
import Dashboard from "./components/Dashboard"
import Signup from "./components/authentication/Signup"
import Login from "./components/authentication/Login"
import PrivateRoute from "./components/authentication/PrivateRoute"
import ForgotPassword from "./components/authentication/ForgotPassword"
import UpdateProfile from "./components/authentication/UpdateProfile"
import MainPage from "./components/MainPage"

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  )
}

export default App
