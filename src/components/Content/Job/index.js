import React, { Component } from 'react'
import './index.css';

export default class Job extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.data) return false;
        const data = this.props.data;
        const company = data.company;
        return (
            <div className="job__item">
                <h2 className="job__item--title">{ company.name }</h2>
                <p className="job__item--description">
                    { data.description }
                </p>
                <br/ > <br/ >
            </div>
        )
    }
}
