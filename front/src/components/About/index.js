import React from 'react';
import './about.scss';
import 'semantic-ui-css/semantic.min.css';
import php from 'src/photos/PHP.png';
import js from 'src/photos/JS.png';
import react from 'src/photos/REACT.png';
import symphony from 'src/photos/SYMPHONY.png';

const About = () => (
  <>
    <div className="all__page about">
      <div className="about_contenair">
        <div className="cards">
          <div className="affiche_card">
            <div className="picture">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U01CCBFM2FQ-2eac481aefd0-512" alt="" />
            </div>
            <p>Kévin | React</p>
          </div>
          <div className="affiche_card">
            <div className="picture">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U01677PF1AP-3d3fcd6f8061-512" alt="" />
            </div>
            <p>Renan | Symfony</p>
          </div>
          <div className="affiche_card">
            <div className="picture">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U016ETQLUUU-26460626ad4f-512" alt="" />
            </div>
            <p>Slim | React</p>
          </div>
          <div className="affiche_card">
            <div className="picture">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U01678JKA82-5524d0573566-512" alt="" />
            </div>
            <p>Stéphanie | Symfony</p>
          </div>
          <div className="affiche_card">
            <div className="picture">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U016KTL660Z-12bee7b854b3-512" alt="" />
            </div>
            <p>Tristant | React</p>
          </div>
        </div>
      </div>
      <div className="pictures">
        <img className="php" src={php} alt="" />
        <img className="symphony" src={symphony} alt="" />
        <img className="react" src={react} alt="" />
        <img className="js" src={js} alt="" />
      </div>
    </div>
  </>
);

export default About;
