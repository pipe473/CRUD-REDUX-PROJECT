
import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import Nuevo from './components/Nuevo';
import Editar from './components/Editar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Productos} />
          <Route exact path="/productos/nuevo" component={Nuevo} />
          <Route exact path="/productos/editar/:id" component={Editar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
