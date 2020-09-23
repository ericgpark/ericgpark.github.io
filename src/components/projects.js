import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, } from 'react-mdl';

class Projects extends Component{
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div>
                    <div className="projects">
                        <img
                        src="https://i.ibb.co/GdDXN5D/openparkinglogo.png"
                        alt="openparking-logo"
                        className="openparking-logo"
                        />
                        <h1>OpenParking</h1>
                        <p>A parking sharing app made for the users, by the users</p>
                    </div>
                    <div className="cards-grid">>
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{color: 'gray', height: '176px', background: 'url(https://i.ibb.co/MPwQyVF/Screen-Shot-2020-09-16-at-4-14-36-PM.png) center / cover'}}>
                                GitHub
                            </CardTitle>
                            <CardActions border>
                                <Button colored onClick={() => this.openLink('https://github.com/open-parking/OpenParking')}>View</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'gray', height: '176px', background: 'url(https://i.ibb.co/XkCGYt8/Screen-Shot-2020-09-16-at-4-41-46-PM.png) center / cover'}}>
                                Developer Guide
                            </CardTitle>
                            <CardActions border>
                                <Button colored onClick={() => this.openFile('file:///Users/ericpark/Desktop/myportfoliosite/myportfoliosite/src/components/developer_guide.html')}>View</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'gray', height: '176px', background: 'url(https://i.ibb.co/6s7vTgN/Screen-Shot-2020-09-16-at-4-37-53-PM.png) center / cover'}}>
                                User Manual
                            </CardTitle>
                            <CardActions border>
                                <Button colored onClick={() => this.openFile('')}>View</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        }
        else if(this.state.activeTab === 1) {
            return(
                <div>
                    <div className="projects">
                        <img
                            src="https://grantland.com/wp-content/uploads/2014/06/diplomacy-illustration.jpg?w=2048"
                            alt="statecraft-logo"
                            className="statecraft-logo"
                        />
                        <h1>StateCraft</h1>
                        <p>Statecraft is an enjoyable, multiplayer experience based on the classic board game, Diplomacy.</p>
                    </div>
                    <div className="cards-grid">>
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{color: 'gray', height: '176px', background: 'url(https://i.ibb.co/hcqzVRh/Screen-Shot-2020-09-17-at-6-15-58-PM.png) center / cover'}}>
                                GitHub
                            </CardTitle>
                            <CardActions border>
                                <Button colored onClick={() => this.openLink('https://github.com/diplomacy-cecs475/client')}>View</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'gray', height: '176px', background: 'url(https://i.ibb.co/mTvnwC8/Screen-Shot-2020-09-17-at-6-25-33-PM.png) center / cover'}}>
                                Vision Document
                            </CardTitle>
                            <CardActions border>
                                <Button colored onClick={() => this.openFile('')}>View</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'gray', height: '176px', background: 'url(https://i.ibb.co/zGvkDHr/Screen-Shot-2020-09-17-at-6-38-37-PM.png) center / cover'}}>
                                User Manual (Video)
                            </CardTitle>
                            <CardActions border>
                                <Button colored onClick={() => this.openLink('https://www.youtube.com/watch?v=v9rcnahI-_s&ab_channel=Fr%C3%A9d%C3%A9ricOddou')}>View</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        }
        else if(this.state.activeTab === 2) {
            return(
                <div>
                    <title>
                        Tetris
                    </title>
                    <div className="tetris-body">
                        <div id="score"></div>
                        <canvas className="tetris-canvas" id="tetris" width="240" height="400"></canvas>
                        <script src="tetris.js"></script>
                    </div>
                </div>
            )
        }
    }
    
    openLink(link)
    {
        window.open(link);
    }
    openFile(path)
    {
        window.open();
    }


    render() {
        return(
            <div className="background">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>OpenParking</Tab>
                    <Tab>StateCraft</Tab>
                    <Tab>Tetris</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;