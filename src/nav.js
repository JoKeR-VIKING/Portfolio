import React from 'react';

import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineTrophy,
    AiOutlinePhone
} from "react-icons/ai";
import {MdOutlineTimeline} from "react-icons/md";


import './css/nav.css';

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            activeNav: "#home",
        }
    }

    render() {
        return(
            <nav>
                <a href="#home" className={this.state.activeNav === "#home" ? 'active' : ''} onClick={() => this.setState({activeNav: "#home"})}>
                    <AiOutlineHome />
                </a>
                <a href="#about" className={this.state.activeNav === "#about" ? 'active' : ''} onClick={() => this.setState({activeNav: "#about"})}>
                    <AiOutlineUser />
                </a>
                <a href="#experience" className={this.state.activeNav === "#experience" ? 'active' : ''} onClick={() => this.setState({activeNav: "#experience"})}>
                    <AiOutlineTrophy />
                </a>
                <a href="#achievements" className={this.state.activeNav === "#achievements" ? 'active' : ''} onClick={() => this.setState({activeNav: "#achievements"})}>
                    <MdOutlineTimeline />
                </a>
                <a href="#contact" className={this.state.activeNav === "#contact" ? 'active' : ''} onClick={() => this.setState({activeNav: "#contact"})}>
                    <AiOutlinePhone />
                </a>
            </nav>
        );
    }
}

export default Nav;