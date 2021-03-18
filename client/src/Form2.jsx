import React from 'react';
import Styles, { ButtonStyled, FormStyled, TitleSmall } from './Styles.js';

class Form2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
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
    if (this.state.line1 && this.state.line2 && this.state.city && this.state.state && this.state.zipcode && this.state.phone)  {
      this.props.onNext2(this.state)
    }
    this.setState({
      errorMsg: 'All fields required.'
    })
  }
  render() {
    return (
      <FormStyled>
          <TitleSmall>Address:</TitleSmall>
        Line 1: <input type="text" name="line1" onChange={this.Entry}></input>
        Line 2: <input type="text" name="line2" onChange={this.Entry}></input>
        City: <input type="text" name="city" onChange={this.Entry}></input>
        State: <input type="text" name="state" onChange={this.Entry}></input>
        Zipcode: <input type="text" name="zipcode" onChange={this.Entry}></input>
        Phone Number: <input type="text" name="phone" onChange={this.Entry}></input>
        <ButtonStyled onClick={this.checkForm}>Submit Form 2</ButtonStyled>
        {this.state.errorMsg}
        </FormStyled>
    )
  }
}

export default Form2;