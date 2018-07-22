import React from 'react';
import './index.css';

const iconList = [
    {
        icon: 'facebook',
        url: 'https://www.facebook.com/coelhoadler'
    },
    {
        icon: 'linkedin',
        url: 'https://br.linkedin.com/in/adlercoelhosantos'
    },    
    {
        icon: 'github',
        url: 'https://github.com/coelhoadler'
    },
    {
        icon: 'instagram',
        url: 'https://www.instagram.com/eu.adler/'
    }    
];

const SocialList = () => {
    return (
        <ul className="social__container">
            {
                iconList.map((el, index) => {
                    const classes = `icon icon-${el.icon}`;
                    return (
                        <li key={ index }>
                            <a href={el.url} target='blank'>
                                <i className={ classes }></i>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default SocialList;