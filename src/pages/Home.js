import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import Intro from '../components/Intro/Intro';
import AllProjects from '../components/Projects/AllProjects';
import Contact from '../components/Contact/Contact';
import PageLayout from '../components/Shapes/PageLayout';
import ProjectDetail from '../components/Projects/ProjectDetail';

const Home = () => {
    return (

        <>
            <Navbar />
            <PageLayout>
                <Intro />
                <AllProjects />
                <ProjectDetail></ProjectDetail>
                <Contact />
            </PageLayout></>
    );
};

export default Home;
