import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../Assets/background/logo.png';

import '../Components/aboutme.css';

require('dotenv').config();

export default class TakeMoney extends React.Component {
  onToken = token => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  render() {
    let keyPublishable = process.env.REACT_APP_PUBLISHABLE_KEY;

    return (
      <div className="abovethepage">
        <div className="entryform">
          <h1>Thanks. Your booking will be $xx.</h1>
          <div className="paybutton">
            <StripeCheckout
              name="Savasana on Sundays" // the pop-in header
              description="Let's get down to business." // the pop-in header subtitle
              image={logo} // the pop-in image
              currency="AUD"
              token={this.onToken} // submit callback
              stripeKey={keyPublishable} // required key
            />
          </div>
        </div>
      </div>
    );
  }
}
