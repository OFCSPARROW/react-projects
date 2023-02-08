import React, { Component } from 'react'

export default class project1 extends Component {
    constructor(props){
      super(props);
      this.state={time:0};
    }
    increase=()=>{
      this.setState({
        time:this.state.time += 5
      })
    }
    decrease=()=>{
      this.setState({
        time:this.state.time -= 5
      })
    }
  render() {
    return (
      <div>
        Number Is={this.state.time} <br/>
        <button onClick={this.increase}>ADD</button>
        <button onClick={this.decrease}>SUB</button>
      </div>
    )
  }
}



