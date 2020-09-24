import React from 'react';
import './App.css';
import { Layout, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div id="drawer">
        <Helmet>
            <title>Eric Park</title>
        </Helmet>
        <Layout Drawer>
            <Drawer>
                <Navigation>
                    <Link to="/"><h1>Meet <b>Eric Park!</b></h1></Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <dif className="page-content" />
                <Main />
            </Content>
        </Layout>
    </div>

  );
}

export default App;
