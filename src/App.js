import React from 'react';
import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';
import PageHero from './components/PageHero/PageHero';
import PageFeatured from './components/PageFeatured/PageFeatured';
import PageDetail from './components/PageDetail/PageDetail';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App({pageData}) {
  return (
    <div className="App">
      <Router>
        <PageHeader headerContent={pageData.header}/>
        <Switch>
        <Route exact path="/">
          <PageHero heroContent={pageData.hero}/>
          <PageFeatured />
        </Route>

        <Route path="/detail">
          <PageDetail />
          <PageFeatured />
        </Route>
        </Switch>
        <PageFooter />
      </Router>
    
    </div>
  );
}

export default App;
