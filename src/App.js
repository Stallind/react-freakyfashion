import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <PageFooter />
    </div>
  );
}

export default App;
