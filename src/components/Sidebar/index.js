import React from 'react';

import './index.css';
import Image from './Image';
import SectionTitle from '../../objects/SectionTitle';
import SocialList from './SocialList';
import SkillProgress from '../../objects/SkilProgress';

const Sidebar = () => {

    return(
        <div className='sidebar__container'>
            
            <Image />
            <h1 className="-name">Adler Coelho Santos</h1>
            <h2 className="-role">Front-end developer</h2>

            <SocialList />

            <section className='-section -motivation'>
                <SectionTitle content='O que me motiva?' />
                <blockquote>
                    A cada dia que passa aumenta mais o meu interesse pelo desenvolvimento Web e as tecnologias que
                    fazem parte desse ambiente incrível. E vejo que a possibilidade de mudar vidas está diretamente ligada
                    à essa ferramenta.
                </blockquote>                
            </section>

            <section className='-section -skills'>
                <SectionTitle content='Algumas skills' />
                
                <SkillProgress
                    progress='90'
                    label='HTML, CSS, JS (purão)' />

                <SkillProgress
                    progress='85'
                    label='Angular' />

                <SkillProgress
                    progress='70'
                    label='React' />

                <SkillProgress
                    progress='85'
                    label='TypeScript' />

                <SkillProgress
                    progress='80'
                    label='Builders' />

                <SkillProgress
                    progress='80'
                    label='Node' />
            </section>
            
            <section className="-section -contact">
                <SectionTitle content='Entre em contato' />
                <ul>
                    <li>
                        <i className="icon icon-envelop"></i>
                        <span>adler.coelho.santos@icloud.com</span>
                    </li>
                    <li>
                        <i className="icon icon-phone"></i>
                        <span>(13) 99627 5325</span>
                    </li>                    
                </ul>
            </section>    
        </div>
    );
}

export default Sidebar;