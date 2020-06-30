import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Wedding, Photos, Travel, Registry, Rsvp } from './screens';
import './App.css';

import SiteNav from './components/site-nav/site-nav';

function App() {
  return (
    <div className="App">
      <p className='alert'>Due to the current pandemic we have decided to postpone our wedding. We will be sure to update everyone ASAP when we decide on a new date. Stay healthy!</p>
      <BrowserRouter>
        <div className='header'>
          <header className="header-logo">
            <div className='names'>Nicholas &amp; Kylie</div>
          </header>

          <SiteNav />
        </div>

        <div className='page'>
          <Route path="/" exact component={Wedding} />
          <Route path="/photos" exact component={Photos} />
          <Route path="/travel" exact component={Travel} />
          <Route path="/registry" exact component={Registry} />
          <Route path="/rsvp" exact component={Rsvp} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
