import React from 'react';
import Styles, { ButtonStyled, TitleSmall, Summary } from './Styles.js';

class Purchase extends React.Component {
  constructor(props) {
    super(props)
    this.onSend = this.onSend.bind(this)
  }
  onSend() {
    this.props.onPurchase()
  }
  render() {
    return (
      <Summary>
        <TitleSmall>Summary:</TitleSmall>
          Name: {this.props.state.details.name}
          <br/>Email: {this.props.state.details.email}
          <br/>Password: {this.props.state.details.password}
          <br/>Line1: {this.props.state.details.line1}
          <br/>Line2: {this.props.state.details.line2}
          <br/>City: {this.props.state.details.city}
          <br/>State: {this.props.state.details.state}
          <br/>Zipcode: {this.props.state.details.zipcode}
          <br/>Phone: {this.props.state.details.phone}
          <br/>Credit Card Number: {this.props.state.details.ccn}
          <br/>Expiration Date: {this.props.state.details.exp}
          <br/>CVV: {this.props.state.details.cvv}
          <br/>Billing Zipcode: {this.props.state.details.ccZipcode}
          <TitleSmall>Confirm?</TitleSmall>
          <ButtonStyled onClick={this.onSend}>Purchase</ButtonStyled>
      </Summary>
    )
  }
}

export default Purchase;