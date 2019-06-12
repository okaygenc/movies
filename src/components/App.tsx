import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Home from './pages/Home';
import MoviesList from './pages/MoviesList';
import SeriesList from "./pages/SeriesList";
import NotFound from './pages/NotFound';
import Header from "./Header";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <div className="container-fluid p-0">
        <Router history={history}>
            <div>
                <Header />
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/movieslist' component={MoviesList} />
                  <Route path='/serieslist' component={SeriesList}/>
                  <Route path='*' component={NotFound} />
                </Switch>
                <Footer />
            </div>
        </Router>
    </div>
  );
}

export default App;
