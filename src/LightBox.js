import React, { Component } from 'react'
import "./LightBox.css"

export default class LightBox extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
        // this.props.toogleLight = this.props.toogleLight.bind(this)
        // this.state= {on: this.props.isOn}

    }

    handleClick(){
        this.props.toogleLighton(this.props.key);
    }

    render() {
        
        return (
            this.props.isOn ? <div className="LightBox-ON" onClick={this.handleClick} /> 
            : <div className="LightBox-OFF" onClick={this.handleClick}/>
            
        )
    }
}
