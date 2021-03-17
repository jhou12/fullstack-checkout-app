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
    this.checkForm = this.checkForm.bind(this)
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
  checkForm(e) {
    console.log('pre')
    e.preventDefault()
    if (this.state.line1 && this.state.line2 && this.state.city && this.state.state && this.state.zipcode && this.state.phone)  {
      this.props.onNext2(this.state)
    }
    this.setState({
      errorMsg: 'All fields required.'
    })
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
      <br/><button onClick={this.checkForm}>Submit Form 1</button>
      <br/>{this.state.errorMsg}
    </div>
    )
  }
}

export default Form2;