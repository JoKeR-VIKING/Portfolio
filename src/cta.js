import React from 'react';

class CTA extends React.Component {
    render() {
        return(
            <div className="cta">
                <a className="btn" href="https://drive.google.com/u/0/uc?id=1frxFVrmVybyxZQimInIgZCkqxthLjJ24&export=download">Download Resume</a>
                <a className="btn btn-primary" href="#contact">Let's Talk</a>
            </div>
        );
    }
}

export default CTA