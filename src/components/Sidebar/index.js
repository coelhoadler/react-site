import React from 'react';

import './index.css';
import Image from './Image';

const Sidebar = () => {

    return(
        <div className="sidebar__container">
            <Image />
            <h1>Adler Coelho Santos</h1>
            <h2>Front-end developer</h2>
        </div>
    );

}

export default Sidebar;