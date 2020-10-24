import React, { useEffect } from "react";
import Payment from "./Payment";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51HUB5gG85QXgFhDEjMofRktrnJou4STHYOii812YDFcDkObcENCddrlKBry7H0a0nYkhnPamm73oDQbvLbD5Zke500WIfRbo75"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS>>>", authUser);
      if (authUser) {
        // the user is logged in / the user was logged in /even refresh the page it will logged back in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
        <Route path="/orders">
            <Header/>
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
