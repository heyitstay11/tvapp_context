import React from 'react';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import ShowGrid from './components/ShowGrid';
import SingleShow from './components/SingleShow';
import {Redirect, Route, Switch} from 'react-router-dom';

const App = () => {

  return (
      <div className="container">
            <Switch>
              <Route exact path="/" render={() => 
              <>
                <Header />
                <Searchbar />
              <ShowGrid />
              </>
            } /> 
              <Route path="/show/:id" component={SingleShow} />
              <Redirect to='/'/>
            </Switch>
      </div>
  )
}

export default App;