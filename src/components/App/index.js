// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';
import 'semantic-ui-css/semantic.min.css';

// == Composant
const App = () => (
  <div className="app">
    <Page />
    <Footer />
  </div>
);

// == Export
export default App;
