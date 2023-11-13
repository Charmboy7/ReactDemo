import React, { Component } from 'react'
import HoverCounter from './HoverCounter'
import HOC from './HOC'

class StateExClsComp extends Component {

   
   constructor(props) {
    super(props)
   
    this.state = {
         count:0
    }
   }
   
   add=()=>{
    this.setState({count:this.state.count+1})
   }

   sub=()=>{
    this.setState({count:this.state.count-1})
   }

    render() {
        return (
            <div>
               <h1>Welcome to Class Page</h1>
               <p><strong>Count:{this.state.count}</strong></p>
               <button type='button' onClick={this.add}>Add</button>
               <button type='button' onClick={this.sub}>Sub</button>
              <HoverCounter></HoverCounter>
            </div>
        )
    }
}

export default HOC(StateExClsComp)
