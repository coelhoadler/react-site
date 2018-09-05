import React, { Component } from 'react'
import './index.css';
import Job from './Job/index';

export default class Content extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        if (!this.props.jobs) return false;
        return (
            <div className="content__container">
                { this.props.jobs.title }
                { this.props.jobs.company.map((item, index) => <Job key={index} data={item} />)  }
            </div>
        )
    }
   
}
