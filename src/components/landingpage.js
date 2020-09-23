import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        /*  Change background color on mouse position
        window.addEventListener(
            "mousemove", function (e) {
                var x = e.offsetX;
                var y = e.offsetY;
                this.console.log(x, y);

                document.body.style.background
                    = `rgb(${x}, ${y}, ${x - y})`;
            });
        */



        return (
            <div className="background">
                <div style={{ width: '100%', margin: 'auto' }}>
                    <Grid>
                        <Cell col={12}>
                            <img 
                                src="https://i.ibb.co/sPV7WCc/circle-cropped.png"
                                alt="profile-pic"
                                className="profile-pic"
                            /> 

                        <div className="banner-text">
                            <h1 class="text-light">Eric Park</h1>
                            <p>Software Engineer</p>
                            <hr />
                            <p>Java | C++ | Python | HTML/CSS | Bootstrap | Javascript | React </p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/eric-p-942955a7/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/ericparkmusic" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        </div>
        )
    }
}

export default Landing;