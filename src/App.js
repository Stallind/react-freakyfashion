import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import PageHeader from './components/PageHeader/PageHeader';

function App() {
  return (
    <div className="App">
      <PageHeader />
    </div>
  );
}

export default App;
