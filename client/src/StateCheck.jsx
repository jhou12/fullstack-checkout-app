import React from 'react';

class StateCheck extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p></p>State check:
        <br/>currentId {this.props.state.currentId}
        <br/>home {this.props.state.home? "true": "false"}
        <br/>checkout {this.props.state.checkout? "true": "false"}
        <br/>next1 {this.props.state.next1? "true": "false"}
        <br/>next2 {this.props.state.next2? "true": "false"}
        <br/>next3 {this.props.state.next3? "true": "false"}
        <br/>form1 {this.props.state.form1? "true": "false"}
        <br/>form2 {this.props.state.form2? "true": "false"}
        <br/>form3 {this.props.state.form3? "true": "false"}
        <br/>confirmed {this.props.state.confirmed? "true": "false"}
      </div>
    )
  }
}

export default StateCheck;