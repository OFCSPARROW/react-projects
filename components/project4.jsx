import React, { Component } from 'react'

export default class project4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         tamil:200,
         english:100,
         maths:100,
         science:100,
         social:100,
      }
    }
  render() {
    let result;
    let total;
    let G;
    let TW;
    if(this.state.tamil<=100 && this.state.english<=100 && this.state.maths<=100 && this.state.science<=100 && this.state.social<=100){ 
      if (this.state.tamil>=35 && this.state.english>=35 && this.state.maths>=35 && this.state.science>=35 && this.state.social>=35) {
        
        result=<div>YOUR PASS</div>
      
      total=this.state.tamil+this.state.english+this.state.maths+this.state.science+this.state.social

      if(total>=495 && total<=500){
        G=<div>YOUR A+ GRADE</div>
      }
      else if(total>=450 && total<=495){
        G=<div>YOUR A GRADE</div>
      }
      else if(total>=380 && total<450){
        G=<div>YOUR B GRADE</div>
      }
      else if(total>=300 && total<380){
        G=<div>YOUR C GRADE</div>
      }
      else if(total>=175 && total<300){
        G=<div>YOUR SLOW RUNNER</div>
      }
      
    } else {
      result=<div>your failed</div>
    }
  }
  else{
    TW=<div>MARK LIMITT: <br/>
            TOTAL =500   <br/>
            SUBJECT=100
    </div>
     
  }
    return (
      <div>
        {result}
        {total}
        {G}
        {TW}
      </div>
    )
  }
}
