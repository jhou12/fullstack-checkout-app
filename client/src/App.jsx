import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Form1 from './Form1.jsx'
import Form2 from './Form2.jsx'
import Form3 from './Form3.jsx'
import Purchase from './Purchase.jsx'
import StateCheck from './StateCheck.jsx'

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
      console.log('Form1:', res.data)
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
      console.log('Form2:', res.data)
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
      console.log('Form3:', res.data)
      axios.post('/confirm', {_id: this.state.currentId})
      .then(res => {
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
          Ready to checkout your shopping cart?
        <br/><button onClick={this.onCheckout}>Checkout</button>
        </div>
      )
    } else if (this.state.checkout) {
      return (
          <Form1 onNext1={this.onNext1}/>
      )
    } else if (this.state.next1) {
      return (
          <Form2 onNext2={this.onNext2}/>
      )
    } else if (this.state.next2) {
      return (
          <Form3 onNext3={this.onNext3}/>
      )
    } else if (this.state.next3) {
      return (
          <Purchase state={this.state} onPurchase={this.onPurchase}/>
      )
    }
  }
}

export default App;
