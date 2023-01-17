import React from 'react';
import { BsPatchCheckFill } from "react-icons/bs";

import './css/experience.css'

class Experience extends React.Component {
    render() {
        return(
            <section id="experience">
                <h2>Skills I Have</h2>
                <h1>My Skills</h1>

                <div className="container experience__container">
                    <div className="experience__languages">
                        <h2>Programming & Styling Languages</h2>
                        <div className="experience__content">
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>C/C++</h3>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>Java</h3>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>Python</h3>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>HTML</h3>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>CSS</h3>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>Data Structures And Algorithms</h3>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>JavaScript</h3>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>C#</h3>
                                    <small className="text-light">Beginner</small>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className="experience__frameworks">
                        <h2>Frameworks & Platforms</h2>
                        <div className="experience__content">
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>Bootstrap</h3>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>NodeJS</h3>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>Django</h3>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>Unity</h3>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>MySQL</h3>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>MongoDB</h3>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>NoSQL</h3>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>Unreal</h3>
                                    <small className="text-light">Beginner</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>ReactJS</h3>
                                    <small className="text-light">Beginner</small>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;