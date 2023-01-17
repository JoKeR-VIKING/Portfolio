import React from 'react';

import './css/footer.css';

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <a className="footer__logo" href="#home">Pratham Vasani</a>

                <ul className="permalinks">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#achievements">Achievements</a></li>
                    <li><a href="#portfolio">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="footer__copyright">@Pratham Vasani. All rights reserved.</div>
            </footer>
        );
    }
}

export default Footer;