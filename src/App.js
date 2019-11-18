import React from 'react';
import logo from './logo.svg';
import './App.css';

import SiteNav from './components/site-nav/site-nav';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <header className="App-header">
          Kylie &amp; Nick
        </header>
        <SiteNav />
        <Route path="/" exact component={Wedding} />
        <Route path="/editor" exact component={Photos} />
        <Route path="/editor" exact component={Travel} />
        <Route path="/editor" exact component={Registry} />
        <Route path="/editor" exact component={RSVP} />
      </HashRouter>
    </div>
  );
}

export default App;
