import React from 'react';
import Styles, { ButtonStyled, FormStyled, TitleSmall } from './Styles.js';

class Form3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ccn: '',
      exp: '',
      cvv: '',
      ccZipcode: '',
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
    if (this.state.ccn && this.state.exp && this.state.cvv && this.state.ccZipcode)  {
      this.props.onNext3(this.state)
    }
    this.setState({
      errorMsg: 'All fields required.'
    })
  }
  render() {
    return (
        <FormStyled>
        <TitleSmall>Billing Information:</TitleSmall>
        Credit Card Number: <input type="text" name="ccn" onChange={this.Entry}></input>
        Exp Date: <input type="text" name="exp" onChange={this.Entry}></input>
        CVV: <input type="text" name="cvv" onChange={this.Entry}></input>
        Zipcode: <input type="text" name="ccZipcode" onChange={this.Entry}></input>
        <ButtonStyled onClick={this.checkForm}>Submit Form 3</ButtonStyled>
        {this.state.errorMsg}
        </FormStyled>
    )
  }
}

export default Form3;