
import './App.css';
import {Header} from './components'
import { Home, Cart } from './pages';
import {Route } from 'react-router-dom';
import React, {useEffect, useState} from 'react';

function App() {

  const [statePizza, setPizzas] = useState([]);
  
  React.useEffect(()=>{
    fetch('http://localhost:3000/db.json').then(resp => resp.json()).then(json => {
      setPizzas(json.pizzas);
    });
    
  }, []);

  return (
    <div className="wrapper">
      <Header />
     <div className="content">
       <Route path="/" render={()=> <Home items={statePizza}/>} exact/>
       <Route path="/cart" component={Cart} exact/>
      </div>
    </div>
  );
}

export default App;
