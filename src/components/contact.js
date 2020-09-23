import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
    render() {
        return(
            <div className="background">
                <div className="contact-body">
                    <Grid className="contact-grid">
                        <Cell className= "contact-cell" col={6}>
                            <h2>Eric Park</h2>
                            <img
                                src="https://i.ibb.co/sPV7WCc/circle-cropped.png"
                                alt="profile-pic"
                                style={{height: '200px'}}
                            />
                            <p style={{width: '85%', margin: 'auto', paddingTop: '1em'}}>
                                Hi! I am a newly graduated software engineer, seeking a full-time position in the field of software, where I can apply my knowledge and skills for continuous improvement. In the past year, I've had a wonderful experience developing Android applications and practicing JavaScript. I'm enthusiastic about learning new technologies. I can't wait to challenge myself, learn valuable lessons, and make lifelong connections with the leaders of the industry.
                            </p>
                        </Cell>

                        <Cell className= "contact-cell" col={6}>
                            <h2>Contact Information</h2>
                            <hr />

                            <div className="contact-list">
                                <List>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '20px', fontFamily: 'Oxygen'}}>
                                            <i className="fa fa-phone-square" aria-hidden="true" />
                                            (714) 980-0080
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '20px', fontFamily: 'Oxygen'}}>
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                            ericparkmusic@gmail.com
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '20px', fontFamily: 'Oxygen'}}>
                                            <i className="fa fa-linkedin" aria-hidden="true" />
                                            <a href="https://www.linkedin.com/in/eric-p-942955a7/" rel="noopener noreferrer" target="_blank">
                                                My LinkedIn
                                            </a>
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '20px', fontFamily: 'Oxygen'}}>
                                            <i className="fa fa-github" aria-hidden="true" />
                                            <a href="https://github.com/ericparkmusic" rel="noopener noreferrer" target="_blank">
                                                My GitHub
                                            </a>
                                        </ListItemContent>
                                    </ListItem>

                                </List>
                            </div>


                        
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Contact;