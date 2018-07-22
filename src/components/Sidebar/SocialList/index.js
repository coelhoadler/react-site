import React from 'react';
import './index.css';

const SocialList = () => {
    return (
        <ul className="social__container">
            <li>
                <i className='icon icon-facebook'></i>
            </li>
            <li>
                <i className='icon icon-linkedin'></i>
            </li>
            <li>
                <i className='icon icon-github'></i>
            </li>
            <li>
                <i className='icon icon-instagram'></i>
            </li>
        </ul>
    );
}

export default SocialList;