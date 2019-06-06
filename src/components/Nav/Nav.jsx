import React, { Component } from "react";
import { Menu, Segment, Modal } from "semantic-ui-react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import Contact from "../Contact/Contact";

export default class Nav extends Component {
    state = { activeItem: "home" }

    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });
        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });
    };

    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        this.props.receiveActiveChange(name);
    };

    render() {
        const { activeItem } = this.state;

        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                        <Menu.Item
                            name="home"
                            active={activeItem === "home"}
                            onClick={this.handleItemClick} >
                            Natalie Dreher
                    </Menu.Item>
                    <Link activeClass="active" className="aboutMe" to="aboutMe" spy={true} smooth={true} duration={500} >
                        <Menu.Item
                            name="aboutMe"
                            active={activeItem === "aboutMe"}
                            onClick={this.handleItemClick}
                        >
                            About Me
                    </Menu.Item>
                    </Link>
                    <Link activeClass="active" className="skills" to="skills" spy={true} smooth={true} duration={500} >
                        <Menu.Item
                            name="skills"
                            active={activeItem === "skills"}
                            onClick={this.handleItemClick}
                        >
                            Skills
                    </Menu.Item>
                    </Link>
                    <Link activeClass="active" className="education" to="education" spy={true} smooth={true} duration={500} >
                        <Menu.Item
                            name="education"
                            active={activeItem === "education"}
                            onClick={this.handleItemClick}
                        >
                            Education
                    </Menu.Item>
                    </Link>
                    <Link activeClass="active" className="portfolio" to="portfolio" spy={true} smooth={true} duration={500} >
                        <Menu.Item
                            name="portfolio"
                            active={activeItem === "portfolio"}
                            onClick={this.handleItemClick}
                        >
                            Portfolio
                    </Menu.Item>
                    </Link>
                    <Modal size="mini" trigger={
                        <Menu.Item
                            name="contactMe"

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