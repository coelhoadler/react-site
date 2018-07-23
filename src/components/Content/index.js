import React, { Component } from 'react'
import './index.css';

export default class Content extends Component {
  
    render() {
        console.log('minhas xps =>', this.props.jobs);
        return (
            <div className="content__container">
                teste        
            </div>
        )
    }
}
