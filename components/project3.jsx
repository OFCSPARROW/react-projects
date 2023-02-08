// import React, { Component } from 'react'

// export default class project3 extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          username:"suman",
//       }
//     }
//   render() {
//     let root
//     if (this.state.username=="") {
//       root=<div>input is epmty</div>
//     }
//     else{
//       root=<div>username is accepted</div>
//     }
//     return(
//       <div>{root}</div>
//     )
//   }
// }


// import React, { Component } from 'react'

// export default class project3 extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        email:"suman@gmail.com",
//        password:12345678,
          
//     }
//   }
//   render() {
//     return (
//       this.state.email=="suman@gmail.com" && this.state.password==12345678 ? (<div>login successfull</div>):(<div>login failed</div>)
//     )
//   }
// }


import React, { Component } from 'react'

export default class project3 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       age:18
    }
  }
  render() {
    return (
      this.state.age>=18 && <div>YOUR MAJOR</div>
    )
  }
}
