import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

class Social extends React.Component {
    render() {
        return(
            <div className="header__socials">
                <a href="https://www.linkedin.com/in/pratham-vasani-a07263202/" target="_blank">
                    <BsLinkedin />
                </a>
                <a href="https://github.com/JoKeR-VIKING" target="_blank">
                    <BsGithub />
                </a>
                <a href="https://leetcode.com/JoKeR_VIKING/" target="_blank">
                    <SiLeetcode />
                </a>
            </div>
        );
    }
}

export default Social