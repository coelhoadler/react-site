import React, { Fragment } from 'react';

import './index.css';

const getStyle = (progress) => {
    return { width: progress };
}

const SkillProgress = ({progress, label}) => {
    return (
        <Fragment>
            <label>{ label }</label>
            <div>
                <div className='outer'
                    style={ getStyle(progress) }>
                </div>
            </div>
        </Fragment>
    )
}

export default SkillProgress;