import React, { Component } from 'react'
import logo from '../images/flick.jpg'
 class image extends Component {
    render() {
        return (
            <div style={{width:'270px',height:'180px',backgroundImage:`url(${logo})`}}>
                
            </div>
        )
    }
}
export default image;