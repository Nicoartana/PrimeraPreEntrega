import 'bootstrap';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from './Components/Navbar';
import ItemCount from "./Components/ItemCount";
import ItemDetail from './Components/ItemDetailContainer/ItemDetail';


const App = () => {
  return (
      <BrowserRouter>
      <NavBar categories={categories} />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
      </Switch>
      <ItemCount /> 
      <ItemDetail />
      </BrowserRouter>
      
      
      
      
  );
  
  
};




export default App;



