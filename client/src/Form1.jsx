import React from 'react';

class Form1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      submit: false,
      errorMsg: '',
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
    this.props.onNext1(this.state)
  }
  checkForm(e) {
    console.log('pre')
    e.preventDefault()
    if (this.state.name && this.state.email && this.state.password)  {
      this.props.onNext1(this.state)
    }
    this.setState({
      errorMsg: 'All fields required.'
    })
  }
  render() {
    console.log('state test', this.state.name, this.state.email, this.state.password)
    return (
      <div>
        <form>
      Name: <input type="text" name="name" onChange={this.Entry} ></input>
      <br/>Email: <input type="text" name="email" onChange={this.Entry}  ></input>
      <br/>Password: <input type="text" name="password" onChange={this.Entry}  ></input>
      <br/><button onClick={this.checkForm}>Submit Form 1</button>
      <br/>{this.state.errorMsg}
      </form>
    </div>
    )
  }
}

export default Form1;