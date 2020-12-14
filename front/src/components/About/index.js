import React from 'react';
import './about.scss';
import 'semantic-ui-css/semantic.min.css';
import php from 'src/photos/PHP.png';
import js from 'src/photos/JS.png';
import react from 'src/photos/REACT.png';
import symphony from 'src/photos/SYMPHONY.png';

const About = () => (
  <>
    <div className="about__container">
      <div className="ui five column grid">
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U01CCBFM2FQ-2eac481aefd0-512"/>
            </div>
            <div className="content">
              <a className="header">Kevin - React</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U01677PF1AP-3d3fcd6f8061-512"/>
            </div>
            <div className="content">
              <a className="header">Renan - Symfony</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U016ETQLUUU-26460626ad4f-512"/>
            </div>
            <div className="content">
              <a className="header">Slim - React</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U01678JKA82-5524d0573566-512"/>
            </div>
            <div className="content">
              <a className="header">Stéphanie - Symfony</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U016KTL660Z-12bee7b854b3-512"/>
            </div>
            <div className="content">
              <a className="header">Tristan - React</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pictures">
      <img className="php" src={php}/>
      <img className="symphony" src={symphony}/>
      <img className="react" src={react}/>
      <img className="js" src={js}/>
    </div>
    </div>
   
  </>
);

export default About;
