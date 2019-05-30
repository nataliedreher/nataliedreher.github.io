import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { Container, Header, Menu, Sidebar, Segment, Icon, Grid, Image } from 'semantic-ui-react'


class PortfolioItems extends Component {

    state = {
        visible: false
    }

    imageClick = () => {
        if (this.state.visible) {
            this.setState({ visible: false });
        } else {
            this.setState({ visible: true });
        };
    }
    handleSidebarHide = () => this.setState({ visible: false })

    render() {
        return (
            <Grid.Column >

                {/* {this.state.dropdownOpen ? <Button>Click Here</Button> : <></>} */}
                <Sidebar.Pushable >
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={this.state.visible}
                        width='thin'
                        style={{ height: "5px" }}
                    >
                        <Header style={{ marginTop: "10px" }} as="h4" inverted >{this.props.projectTitle}</Header>
                        <Menu.Item as='a' href={this.props.repo} target="_blank" rel="noopener noreferrer">
                            <Icon name='github' />
                            Repository
                        </Menu.Item>
                        {this.props.deployment ? <Menu.Item as='a' href={this.props.deployment} target="_blank" rel="noopener noreferrer">
                            <Icon name='desktop' />
                            Deployment
                        </Menu.Item> : <></>}
                    </Sidebar>

                    <Sidebar.Pusher >
                        <Image
                            fluid
                            label={{ as: 'a', color: 'blue', content: this.props.flag, icon: this.props.fontIcon, ribbon: true }}
                            rounded
                            src={this.props.source}
                            onClick={this.imageClick}
                            style={{ margin: "0 10px 0 10px", width: "16vw", height: "auto" }} />
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Grid.Column>
        )}
}


export default PortfolioItems;