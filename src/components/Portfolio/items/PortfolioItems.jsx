import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Modal, Header, Menu, Sidebar, Dimmer, Icon, Grid, Image } from "semantic-ui-react"
import "../Portfolio.css";


class PortfolioItems extends Component {

    state = {
        visible: false,
    }

    handleShow = () => this.setState({ active: true });
    handleHide = () => this.setState({ active: false });
    handleSidebarHide = () => this.setState({ visible: false });

    imageClick = () => {
        if (this.state.visible) {
            this.setState({ visible: false });
        } else {
            this.setState({ visible: true });
        };
    };

    render() {
        const { active } = this.state;
        const content = (
            <>
                <Header as="h3" inverted>
                    Technologies:
                </Header>
                <p>{this.props.technologies}</p>
                <p>{this.props.description}</p>
            </>
        );

        return (
            <Grid.Column >
                <Sidebar.Pushable >
                    <Sidebar
                        as={Menu}
                        animation="overlay"
                        icon="labeled"
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={this.state.visible}
                        width="thin"
                        style={{ height: "5px" }}
                    >
                        <Header style={{ marginTop: "10px" }} as="h4" inverted >{this.props.projectTitle}</Header>
                        {this.props.sandbox ? <Modal centered style={{ width: "98%" }} trigger={<Menu.Item>
                            <Icon name="code" />
                            Codesandbox
                        </Menu.Item>}
                        >
                            <div className="iframe-container">
                                <iframe src={this.props.sandbox} title="react-clicky-game" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin">                            <p>Your browser does not support iframes.</p>
                                </iframe>
                            </div>
                        </Modal> : <></>}
                        <Menu.Item as="a" href={this.props.repo} target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            Repository
                        </Menu.Item>
                        {this.props.deployment ? <Menu.Item as="a" href={this.props.deployment} target="_blank" rel="noopener noreferrer">
                            <Icon name="desktop" />
                            Deployment
                        </Menu.Item> : <></>}
                    </Sidebar>

                    <Sidebar.Pusher >
                        <Dimmer.Dimmable
                            as={Image}
                            fluid
                            label={{ as: "a", color: "blue", content: this.props.flag, icon: this.props.fontIcon, ribbon: true }}
                            rounded
                            className="project-icon"
                            src={this.props.source}
                            onClick={this.imageClick}
                            dimmed={active}
                            dimmer={{ active, content }}
                            onMouseEnter={this.handleShow}
                            onMouseLeave={this.handleHide}
                            style={{ padding: "0 10px 0 0", marginLeft: 10 }} />
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Grid.Column>
        );
    };
};


export default PortfolioItems;