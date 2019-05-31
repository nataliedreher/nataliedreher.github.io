import React, { Component } from 'react'
import { Menu, Segment, Modal } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from "../Contact/Contact";

export default class Nav extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    {/* <Link to="/"> */}
                        <Menu.Item
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick} >
                            Natalie Dreher
                    </Menu.Item>
                    {/* </Link>
                    <Link to="/about"> */}
                        <Menu.Item
                            name='aboutMe'
                            active={activeItem === 'aboutMe'}
                            onClick={this.handleItemClick}
                        >
                            About Me
                    </Menu.Item>
                    {/* </Link>
                    <Link to="/portfolio"> */}
                        <Menu.Item
                            name='portfolio'
                            active={activeItem === 'portfolio'}
                            onClick={this.handleItemClick}
                        >
                            Portfolio
                    </Menu.Item>
                    {/* </Link> */}
                    <Modal size="mini" trigger={
                        <Menu.Item
                            name='contactMe'
                            // active={activeItem === 'contactMe'}
                            onClick={this.handleItemClick}
                            position="right"
                        >
                            Contact Me
                    </Menu.Item>
                    }>
                    <Contact />
                    </Modal>
                </Menu>
            </Segment>
        )
    }
}