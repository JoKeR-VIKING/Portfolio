import React from 'react';

import './css/achievement.css';

class Achievement extends React.Component {
    render() {
        return(
            <section id="achievements">
                <h2>What Milestones Have I Achieved</h2>
                <h1>My Timeline</h1>

                <div className="timeline">
                    <div className="timeline__card left">
                        <div className="timeline__content">
                            <h2>2020</h2>
                            <h3>Rank #1 In Code Of Duty Contest</h3>
                        </div>
                    </div>
                    <div className="timeline__card right">
                        <div className="timeline__content">
                            <h2>2021</h2>
                            <h3>Rank #1 In Institute On GFG</h3>
                        </div>
                    </div>
                    <div className="timeline__card left">
                        <div className="timeline__content">
                            <h2>2022</h2>
                            <h3>Project Trainee At Winsoft Technologies</h3>
                        </div>
                    </div>
                    <div className="timeline__card right">
                        <div className="timeline__content">
                            <h2>2022</h2>
                            <h3>Knight Badge On LeetCode</h3>
                        </div>
                    </div>
                    <div className="timeline__card left">
                        <div className="timeline__content">
                            <h2>2022</h2>
                            <h3>Rank #1 In IEEE Xtreme Overflow Contest</h3>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Achievement;