import React from 'react';

class Form2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: ''
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
    this.props.onNext2(this.state)
  }
  render() {
    return (
      <div>
        Address:
      <br/>Line 1: <input type="text" name="line1" onChange={this.Entry}></input>
      <br/>Line 2: <input type="text" name="line2" onChange={this.Entry}></input>
      <br/>City: <input type="text" name="city" onChange={this.Entry}></input>
      <br/>State: <input type="text" name="state" onChange={this.Entry}></input>
      <br/>Zipcode: <input type="text" name="zipcode" onChange={this.Entry}></input>
      <br/>Phone Number: <input type="text" name="phone" onChange={this.Entry}></input>
      <br/><button onClick={this.onSend}>Submit Form2</button>
    </div>
    )
  }
}

export default Form2;