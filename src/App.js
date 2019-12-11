import React from 'react';
import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';
import PageHero from './components/PageHero/PageHero';
import PageFeatured from './components/PageFeatured/PageFeatured';


function App({pageData}) {
  return (
    <div className="App">
      <PageHeader headerContent={pageData.header}/>
      <PageHero heroContent={pageData.hero}/>
      <PageFeatured />
      <PageFooter />
    </div>
  );
}

export default App;
