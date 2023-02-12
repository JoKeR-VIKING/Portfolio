import React from 'react';

import './css/portfolio.css';
import product_destination from './images/product-destination.jpeg';
import level_up from './images/level-up.png';
import fake_product_identifier from './images/fake-product-identifier.jpg';
import space_shooter from './images/space-shooter.png';
import minesweeper from './images/minesweeper.jfif';
import natours from './images/natours.png';

const projects = [
    {
        id: 1,
        image: product_destination,
        title: 'Product Destination',
        github: 'https://github.com/JoKeR-VIKING/e_commerce_django',
        live: 'https://prathamvasani1.pythonanywhere.com',
    },
    {
        id: 2,
        image: natours,
        title: 'Natours',
        github: 'https://github.com/JoKeR-VIKING/Natours',
        live: 'https://joker-viking.github.io/Natours/',
    },
    {
        id: 3,
        image: natours,
        title: 'Nexter',
        github: 'https://github.com/JoKeR-VIKING/Nexter',
        live: 'https://joker-viking.github.io/Nexter/',
    },
    {
        id: 4,
        image: natours,
        title: 'Trillo',
        github: 'https://github.com/JoKeR-VIKING/Trillo',
        live: 'https://joker-viking.github.io/Trillo/',
    },
    {
        id: 5,
        image: level_up,
        title: 'Level Up',
        github: 'https://github.com/JoKeR-VIKING/LevelUp',
        live: 'https://levelup-r5gg.onrender.com/',
    },
    {
        id: 6,
        image: space_shooter,
        title: 'Space Shooter',
        github: 'https://github.com/JoKeR-VIKING/Space-Shooter',
        live: null,
    },
    {
        id: 7,
        image: minesweeper,
        title: 'Minesweeper',
        github: 'https://github.com/JoKeR-VIKING/Minesweeper',
        live: null,
    },
    {
        id: 8,
        image: fake_product_identifier,
        title: 'Fake Product Identifier',
        github: 'https://github.com/JoKeR-VIKING/FakeProductIdentifier',
        live: null,
    },
]

class Portfolio extends React.Component {
    render() {
        return(
            <section id="portfolio">
                <h2>Projects I Have Worked On</h2>
                <h1>Featured Projects</h1>

                <div className="container portfolio__container">
                    {
                        projects.map(({id, image, title, github, live}) => {
                            return(
                                <article key={id} className="portfolio__item">
                                    <div className="portfolio__item-image">
                                        <img src={image} alt="Logo" />
                                    </div>
                                    <h2>{title}</h2>
                                    <div className="portfolio__item-cta">
                                        <a className="btn" href={github} target="_blank">Github</a>
                                        {live && <a className="btn btn-primary" href={live} target="_blank">Live Demo</a>}
                                    </div>
                                </article>
                            );
                        })
                    }
                </div>
            </section>
        );
    }
}

export default Portfolio;