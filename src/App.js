import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';
import PageHero from './components/PageHero/PageHero';
import PageFeatured from './components/PageFeatured/PageFeatured';


function App() {
  return (
    <div className="App">
      <PageHeader />
      <PageHero />
      <PageFeatured />
      <PageFooter />
    </div>
  );
}

export default App;
