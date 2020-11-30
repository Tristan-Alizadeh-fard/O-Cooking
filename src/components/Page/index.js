import React from 'react';
import './page.scss';
import { Feather } from 'react-feather';
import Navbar from 'src/components/Navbar';

const Page = () => (
  <div className="page">
    <header className="page__header">
      <span className="page__icon">Icon</span>
      <h2 className="page__title">O'Coocking</h2>
      <Navbar />
    </header>
  </div>
);

export default Page;
