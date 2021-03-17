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
    console.log('PURCHASE PROPS', this.props)
    return (
      <div>
                  test id: {this.props.state.details._id}
          <br/>email: {this.props.state.details.email}
          <br/>name: {this.props.state.details.name}
          <br/>password: {this.props.state.details.password}
          <br/>city: {this.props.state.details.city}
          <br/>line1: {this.props.state.details.line1}
          <br/>line2: {this.props.state.details.line2}
          <br/>phone: {this.props.state.details.phone}
          <br/>state: {this.props.state.details.state}
          <br/>zipcode: {this.props.state.details.zipcode}
          <br/>ccZipcode: {this.props.state.details.ccZipcode}
          <br/>ccn: {this.props.state.details.ccn}
          <br/>cvv: {this.props.state.details.cvv}
          <br/>exp: {this.props.state.details.exp}
        Confirm?
          <br/><button onClick={this.onSend}>Purchase</button>

      </div>
    )
  }
}

export default Purchase;