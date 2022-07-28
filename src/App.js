
import React from 'react';
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Products from "./pages/Products";
// import header
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/products"> <Products /> </Route>
          <Route path="/Cart"> <Cart/> </Route>

        
          <Route path="*" ><Error /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
