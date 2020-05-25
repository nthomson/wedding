import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Wedding, Photos, Travel, Registry, Rsvp } from './screens';
import './App.css';

import SiteNav from './components/site-nav/site-nav';

function App() {
  return (
    <div className="App">
      <p className='alert'>As of now we have <strong>not</strong> decided to postpone, however we are keeping an eye on the situation and we will update everyone if anything changes.</p>
      <BrowserRouter>
        <div className='header'>
          <header className="header-logo">
            <div className='names'>Nicholas &amp; Kylie</div>
            <div className='date'>October 23, 2020</div>
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
