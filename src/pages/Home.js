import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AllProjects from '../components/Projects/AllProjects';
import Contact from '../components/Contact/Contact';
import PageLayout from '../components/Layout/PageLayout';
import About from '../components/About/About';

const Home = () => {
    return (
        <>
            <Navbar />
            <PageLayout>
                <About />
                <AllProjects />
                <Contact />
            </PageLayout></>
    );
};

export default Home;
