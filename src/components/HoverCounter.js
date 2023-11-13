import React, { Component } from 'react'
import HOC from './HOC'

export class HoverCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    add=()=>{
        this.setState({count:this.state.count+1})
    }
    
    render() {
        return (
            <div>
                <h3>Hover Count:{this.state.count}</h3>
                 <h4 onMouseOver={this.add} style={{color:"blue", backgroundColor:"aqua"}}>Place the Mouse to hover and Add</h4>
            </div>
        )
    }
}

export default  HOC( HoverCounter)
