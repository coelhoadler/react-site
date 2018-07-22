import React from 'react';

import './index.css';
import Image from './Image';

const Sidebar = () => {

    return(
        <div className="sidebar__container">
            <Image />
            <h1>Adler Coelho Santos</h1>
            <h2>Front-end developer</h2>

            <ul>
                <li>
                    <i className="icon icon-facebook"></i>
                </li>
                <li>
                    <i className="icon icon-linkedin"></i>
                </li>
                <li>
                    <i className="icon icon-github"></i>
                </li>
                <li>
                    <i className="icon icon-instagram"></i>
                </li>
            </ul>
        </div>
    );

}

export default Sidebar;