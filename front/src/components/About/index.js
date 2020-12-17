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
              <p>Kévin</p>
              <p>React</p>
              <p>Lead Dev Front</p>
            </div>
          </div>
          <div className="affiche_card">
            <div className="picture">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U01677PF1AP-80842f306660-192" alt="" />
            </div>
            <div className="description">
              <p>Renan</p>
              <p>Symfony</p>
              <p>Srum Master</p>
            </div>
          </div>
          <div className="affiche_card">
            <div className="picture">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U016ETQLUUU-26460626ad4f-512" alt="" />
            </div>
            <div className="description">
              <p>Slim</p>
              <p>React</p>
              <p>Git Master</p>
            </div>
          </div>
          <div className="affiche_card">
            <div className="picture">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U01678JKA82-5524d0573566-512" alt="" />
            </div>
            <div className="description">
              <p>Stéphanie</p>
              <p>Symfony</p>
              <p>Product Owner - Lead Dev Back</p>
            </div>
          </div>
          <div className="affiche_card">
            <div className="picture">
              <img src="https://ca.slack-edge.com/T016B3JM5J5-U016KTL660Z-12bee7b854b3-512" alt="" />
            </div>
            <div className="description">
              <p>Tristan</p>
              <p>React</p>
              <p>Dév</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default About;
