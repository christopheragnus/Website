import React, { Component } from 'react';
import './aboutme.css';

export default class Prices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }

  componentDidMount() {
    //we callApi
    fetch('/api/content/prices')
      .then(res => res.json())
      .then(prices => this.setState({ response: prices.text }));
  }

  render() {
    return (
      <div className="background">
        <div className="child">
          <p>{this.state.response}</p>
        </div>
      </div>
    );
  }
}
