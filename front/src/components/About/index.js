import React from 'react';
import './about.scss';
import 'semantic-ui-css/semantic.min.css';
import php from 'src/photos/PHP.png';
import js from 'src/photos/JS.png';
import react from 'src/photos/REACT.png';
import symphony from 'src/photos/SYMPHONY.png';

const About = () => (
  <>
    <div className="team_title">
      <h2>L'équipe O'Cooking</h2>
    </div>
    <div className="all__page about">
      <div className="about_contenair">
        <div className="cards">
          <div className="affiche_card">
            <div className="picture">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U01CCBFM2FQ-2eac481aefd0-512" alt="" />
            </div>
            <div className="description">
              <h3>Kévin</h3>
              <h4>React</h4>
              <h5>Lead Dev Front</h5>
            </div>
          </div>
          <div className="affiche_card">
            <div className="picture">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U01677PF1AP-80842f306660-192" alt="" />
            </div>
            <div className="description">
              <h3>Renan</h3>
              <h4>Symfony</h4>
              <h5>Srum Master</h5>
            </div>
          </div>
          <div className="affiche_card">
            <div className="picture">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U016ETQLUUU-26460626ad4f-512" alt="" />
            </div>
            <div className="description">
              <h3>Slim</h3>
              <h4>React</h4>
              <h5>Git Master</h5>
            </div>
          </div>
          <div className="affiche_card">
            <div className="picture">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U01678JKA82-5524d0573566-512" alt="" />
            </div>
            <div className="description">
              <h3>Stéphanie</h3>
              <h4>Symfony</h4>
              <h5>Product Owner - Lead Dev Back</h5>
            </div>
          </div>
          <div className="affiche_card">
            <div className="picture">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U016KTL660Z-12bee7b854b3-512" alt="" />
            </div>
            <div className="description">
              <h3>Tristan</h3>
              <h4>React</h4>
              <h5>Dév</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default About;
