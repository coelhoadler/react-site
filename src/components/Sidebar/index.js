import React from 'react';

import './index.css';
import Image from './Image';
import SectionTitle from '../../objects/SectionTitle';

const Sidebar = () => {

    return(
        <div className='sidebar__container'>
            <Image />
            <h1 className="-name">Adler Coelho Santos</h1>
            <h2 className="-role">Front-end developer</h2>

            <ul>
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

            <SectionTitle tag='h3' content='O que me motiva?' />

            <blockquote>
                A cada dia que passa aumenta mais o meu interesse pelo desenvolvimento Web e as tecnologias que
                fazem parte desse ambiente incrível. E vejo que a possibilidade de mudar vidas está diretamente ligada
                à essa ferramenta.                
            </blockquote>

            <SectionTitle tag='h3' content='Skills' />
            {/* - Html, CSS (c/ pré processador), JS (purão)
            - Angular
            - React
            - TypeScript
            - Builders
            - Node */}
            

            <SectionTitle tag='h3' content='Entre em contato' />

            <i class="icon icon-envelop"></i>
            <i class="icon icon-phone"></i>

        </div>
    );

}

export default Sidebar;