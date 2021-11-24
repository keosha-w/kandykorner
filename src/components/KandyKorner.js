import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./Nav/NavBar"
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const KandyKorner = () => {
    return (
        
    <>
      <Route
        render={() => {
          if (localStorage.getItem("kandy_customer")) {
            return (
              <>
                <NavBar/>
                <h1>Kandy Korner Confections</h1>
                <ApplicationViews/>
              </>
            );
          }else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
        )
}