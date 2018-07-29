import React, { Fragment } from 'react';

import './index.css';

const getWidthStyle = progress => {
    return { width: `${progress}%` };
}

const SkillProgress = ({progress, label}) => {
    return (
        <Fragment>
            <div className='-container'>
                <label>{ label }</label>
                <div className='-outer'>
                    <div className='-inner'
                        style={ getWidthStyle(progress) }>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SkillProgress;