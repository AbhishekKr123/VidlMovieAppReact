import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/Movies';
import Customers from './components/Customers';
import NotFound from './components/NotFound';
import MovieForm from './components/MoviesForm';
import Rentals from './components/Rentals';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" to="/movies" exact />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
