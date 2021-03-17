import React from 'react';

class Form1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
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
    this.props.onNext1(this.state)
  }
  render() {
    return (
      <div>
      Name: <input type="text" name="name" onChange={this.Entry}></input>
      <br/>Email: <input type="text" name="email" onChange={this.Entry}></input>
      <br/>Password: <input type="text" name="password" onChange={this.Entry}></input>
      <br/><button onClick={this.onSend}>Submit Form 1</button>
    </div>
    )
  }
}

export default Form1;