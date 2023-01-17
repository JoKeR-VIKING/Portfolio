import React from 'react';
import { createRoot } from 'react-dom/client';

import Header from './header';
import Nav from './nav';
import About from './about';
import Experience from './experience';
import Achievement from './achievement';
import Portfolio from './portfolio';
import ContactMe from './contact_me';
import Footer from './footer';

import './css/index.css';

class App extends React.Component {
    render() {
        return(
            <>
                <Header />
                <Nav />
                <About />
                <Experience />
                <Achievement />
                <Portfolio />
                <ContactMe />
                <Footer />
            </>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />)