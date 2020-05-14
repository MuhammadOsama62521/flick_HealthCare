import React, { Component } from 'react'
import logo from '../images/flick.jpg'
 class image extends Component {
    render() {
        return (
            <div style={{width:'256px',height:'159px',backgroundImage:`url(${logo})`}}>
                
            </div>
        )
    }
}
export default image;