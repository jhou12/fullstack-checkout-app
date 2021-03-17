import React from 'react';

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
      <div>
          {/* test id: {this.props.state.details._id} */}
          <br/>name: {this.props.state.details.name}
          <br/>email: {this.props.state.details.email}
          <br/>password: {this.props.state.details.password}
          <br/>line1: {this.props.state.details.line1}
          <br/>line2: {this.props.state.details.line2}
          <br/>city: {this.props.state.details.city}
          <br/>state: {this.props.state.details.state}
          <br/>zipcode: {this.props.state.details.zipcode}
          <br/>phone: {this.props.state.details.phone}
          <br/>ccn: {this.props.state.details.ccn}
          <br/>exp: {this.props.state.details.exp}
          <br/>cvv: {this.props.state.details.cvv}
          <br/>ccZipcode: {this.props.state.details.ccZipcode}
          Confirm?
          <br/><button onClick={this.onSend}>Purchase</button>
      </div>
    )
  }
}

export default Purchase;