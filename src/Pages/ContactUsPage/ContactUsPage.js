import React from 'react';
import ShopList from '../../Components/ShopList/ShopList';
import ShopMap from '../../Components/ShopMap/ShopMap';

import './ContactUsPage.css';

function ContactPage() {
  return (
    <div className="container">
      <div className="content">
        <div className="shops-wrapper">
          <h1 className="shops-section-title">Find Us</h1>
          <ShopList />
        </div>
        <ShopMap />
      </div>
    </div>
  );
}

export default ContactPage;
