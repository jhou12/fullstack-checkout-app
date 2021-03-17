import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentId: null,
      home: true,
      checkout: false,
      next1: false,
      next2: false,
      next3: false,
      form1: false,
      form2: false,
      form3: false,
      confirmed: false,
      details: {
        _id: '',
        email: '',
        name: '',
        password: '',
        city: '',
        line1: '',
        line2: '',
        phone: '',
        state: '',
        zipcode: '',
        ccZipcode: '',
        ccn: '',
        cvv: '',
        exp: ''
      }
    }
    this.onCheckout = this.onCheckout.bind(this)
    this.onNext1 = this.onNext1.bind(this)
    this.onNext2 = this.onNext2.bind(this)
    this.onNext3 = this.onNext3.bind(this)
    this.onPurchase = this.onPurchase.bind(this)
  }
  onCheckout(e) {
    console.log('checkout clicked')
    this.setState({
      home: false,
      checkout: true,
      confirmed: false,
      form1: false,
      form2: false,
      form3: false
    })
    axios('/id')
    .then(res => {
      console.log('id response', res.data)
      this.setState({
        currentId: res.data
      })
    })
  }
  onNext1(form) {
    this.setState({
      checkout: false,
      next1: true
    })
    form._id = this.state.currentId
    axios.post('/forms', form)
    .then(res => {
      console.log('sent form1!')
    })
  }
  onNext2(form) {
    this.setState({
      next1: false,
      next2: true
    })
    form._id = this.state.currentId
    axios.post('/forms', form)
    .then(res => {
      console.log('sent form2!')
    })
  }
  onNext3(form) {
    this.setState({
      next2: false,
      next3: true
    })
    form._id = this.state.currentId
    axios.post('/forms', form)
    .then(res => {
      console.log('sent form3!')
      axios.post('/confirm', {_id: this.state.currentId})
      .then(res => {
        console.log('FINAL FORM BACK FROM DB', res.data)
        this.setState({
          details: res.data[0]
        })
      })
    })
  }
  onPurchase() {
    this.setState({
      next3: false,
      home: true,
      confirmed: true,
    })
    let confirmedObj = {
      _id: this.state.currentId,
      confirmed: true
    }
    axios.post('/forms', confirmedObj)
    .then(res => {
      console.log('confirmed!')
    })
  }
  componentDidMount() {
    axios('/connect')
    .then(res => {
      console.log(res.data)
    })

  }
  render() {
    if (this.state.home) {
      return (
        <div>
          Home
        <br/><button onClick={this.onCheckout}>Checkout</button>
        <p></p>State check:
          <br/>currentId {this.state.currentId}*
          <br/>home {this.state.home? "true": "false"}*
          <br/>checkout {this.state.checkout? "true": "false"}
          <br/>next1 {this.state.next1? "true": "false"}
          <br/>next2 {this.state.next2? "true": "false"}
          <br/>next3 {this.state.next3? "true": "false"}
          <br/>form1 {this.state.form1? "true": "false"}
          <br/>form2 {this.state.form2? "true": "false"}
          <br/>form3 {this.state.form3? "true": "false"}
          <br/>confirmed {this.state.confirmed? "true": "false"}
        </div>
      )
    } else if (this.state.checkout) {
      return (
        <div>
          <F1 onNext1={this.onNext1}/>
          <br/>State check:
          <br/>currentId {this.state.currentId}*
          <br/>home {this.state.home? "true": "false"}
          <br/>checkout {this.state.checkout? "true": "false"}
          <br/>next1 {this.state.next1? "true": "false"}
          <br/>next2 {this.state.next2? "true": "false"}
          <br/>next3 {this.state.next3? "true": "false"}
          <br/>form1 {this.state.form1? "true": "false"}*
          <br/>form2 {this.state.form2? "true": "false"}*
          <br/>form3 {this.state.form3? "true": "false"}*
          <br/>confirmed {this.state.confirmed? "true": "false"}*
        </div>
      )
    } else if (this.state.next1) {
      return (
        <div>
          <F2 onNext2={this.onNext2}/>
        </div>
      )
    } else if (this.state.next2) {
      return (
        <div>
          <F3 onNext3={this.onNext3}/>
        </div>
      )
    } else if (this.state.next3) {
      return (
        <div>
          test id: {this.state.details._id}
          <br/>email: {this.state.details.email}
          <br/>name: {this.state.details.name}
          <br/>password: {this.state.details.password}
          <br/>city: {this.state.details.city}
          <br/>line1: {this.state.details.line1}
          <br/>line2: {this.state.details.line2}
          <br/>phone: {this.state.details.phone}
          <br/>state: {this.state.details.state}
          <br/>zipcode: {this.state.details.zipcode}
          <br/>ccZipcode: {this.state.details.ccZipcode}
          <br/>ccn: {this.state.details.ccn}
          <br/>cvv: {this.state.details.cvv}
          <br/>exp: {this.state.details.exp}
          <Purchase onPurchase={this.onPurchase}/>
          <br/>State check:
          <br/>currentId {this.state.currentId}*
          <br/>home {this.state.home? "true": "false"}
          <br/>checkout {this.state.checkout? "true": "false"}
          <br/>next1 {this.state.next1? "true": "false"}
          <br/>next2 {this.state.next2? "true": "false"}
          <br/>next3 {this.state.next3? "true": "false"}
          <br/>form1 {this.state.form1? "true": "false"}*
          <br/>form2 {this.state.form2? "true": "false"}*
          <br/>form3 {this.state.form3? "true": "false"}*
          <br/>confirmed {this.state.confirmed? "true": "false"}
        </div>
      )
    }
  }
}

class F1 extends React.Component {
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

class F2 extends React.Component {
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
      <br/><button onClick={this.onSend}>Next2</button>
    </div>
    )
  }
}

class F3 extends React.Component {
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
      <br/><button onClick={this.onSend}>Next3</button>
    </div>
    )
  }
}
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
        Confirm?
          <br/><button onClick={this.onSend}>Purchase</button>

      </div>
    )
  }
}
export default App;
