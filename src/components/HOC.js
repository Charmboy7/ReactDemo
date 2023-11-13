import { Component } from '@angular/core'
import React from 'react'

const HOC = (warpper) => {

    class HoverCounter extends Component
    {
       constructor(props) {
        super(props)
       
        this.state = {
             count:0
        }
       }

       add=()=>{
        this.setState({count:this.state.count+1})
       }
       
       render()
       {
        return  <warpper count={this.state.count} add={this.add}></warpper>

        
       }
    }
    return (
        <div>
            
        </div>
    )
}

export default HOC
