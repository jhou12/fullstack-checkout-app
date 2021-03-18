import React from 'react';
import Styles, { FormStyled, ButtonStyled, TitleSmall, ErrorStyled } from './Styles.js';

class Form1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      errorMsg: '',
    }
    this.Entry = this.Entry.bind(this)
    this.checkForm = this.checkForm.bind(this)
  }
  Entry(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  checkForm(e) {
    e.preventDefault()
    if (this.state.name && this.state.email && this.state.password)  {
      this.props.onNext1(this.state)
    }
    this.setState({
      errorMsg: 'All fields required.'
    })
  }
  render() {
    return (
        <FormStyled>
          <TitleSmall>User Information:</TitleSmall>
        Name: <input type="text" name="name" onChange={this.Entry} ></input>
        Email: <input type="text" name="email" onChange={this.Entry}  ></input>
        Password: <input type="text" name="password" onChange={this.Entry}  ></input>
        <ButtonStyled onClick={this.checkForm}>Submit Form 1</ButtonStyled>
        <ErrorStyled>{this.state.errorMsg}</ErrorStyled>
        </FormStyled>
    )
  }
}

export default Form1;