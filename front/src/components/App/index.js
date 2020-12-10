// == Import npm
import React from 'react';

// == Import
import 'semantic-ui-css/semantic.min.css';
import Page from 'src/containers/ConnectedPage';
import Footer from 'src/components/Footer';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Page />
    <Footer />
  </div>
);

// == Export
export default App;
