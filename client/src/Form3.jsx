import React from 'react';

class Form3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ccn: '',
      exp: '',
      cvv: '',
      ccZipcode: ''
    }
    this.Entry = this.Entry.bind(this)
    this.onSend = this.onSend.bind(this)
  }
  Entry(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }
  onSend() {
    this.props.onNext3(this.state)
  }
  render() {
    return (
      <div>
        Billing Information:
      <br/>Credit Card Number: <input type="text" name="ccn" onChange={this.Entry}></input>
      <br/>Exp Date: <input type="text" name="exp" onChange={this.Entry}></input>
      <br/>CVV: <input type="text" name="cvv" onChange={this.Entry}></input>
      <br/>Zipcode: <input type="text" name="ccZipcode" onChange={this.Entry}></input>
      <br/><button onClick={this.onSend}>Submit Form3</button>
    </div>
    )
  }
}

export default Form3;