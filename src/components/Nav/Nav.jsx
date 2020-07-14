import React, { Component } from "react";
import { Menu, Segment, Responsive } from "semantic-ui-react";
import { Link } from "react-scroll";


export default class Nav extends Component {
    state = { activeItem: "home" };

    handleItemClick = (e, { name }) => {
        this.props.receiveActiveChange(name);
    };

    handleScroll = () => {
        this.setState({ activeItem: this.props.appState });
    };

    componentDidMount() {
        console.log("prop ", this.props.appState);
    };

    render() {

        const { activeItem } = this.state;
        document.addEventListener("scroll", this.handleScroll);
        return (
            <Segment inverted>
                <Responsive minWidth={768} as={"div"}>
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
                                About
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
                                Projects
                    </Menu.Item>
                        </Link>
                        </Menu>
                    </Responsive>
                    <Responsive maxWidth={767} as={"div"}>
                    <Menu inverted pointing secondary>
                        <Menu.Item
                            style={{ paddingLeft: 10, paddingRight: 10 }}
                            name="home"
                            active={activeItem === "home"}
                            onClick={this.handleItemClick} >
                            Natalie Dreher
                    </Menu.Item>
                        <Link activeClass="active" className="aboutMe" to="aboutMe" spy={true} smooth={true} duration={500} >
                            <Menu.Item
                                style={{ paddingLeft: 10, paddingRight: 10 }}
                                name="aboutMe"
                                active={activeItem === "aboutMe"}
                                onClick={this.handleItemClick}
                            >
                                About
                    </Menu.Item>
                        </Link>
                        <Link activeClass="active" className="skills" to="skills" spy={true} smooth={true} duration={500} >
                            <Menu.Item
                                style={{ paddingLeft: 10, paddingRight: 10 }}
                                name="skills"
                                active={activeItem === "skills"}
                                onClick={this.handleItemClick}
                            >
                                Skills
                    </Menu.Item>
                        </Link>
                        <Link activeClass="active" className="education" to="education" spy={true} smooth={true} duration={500} >
                            <Menu.Item
                                style={{ paddingLeft: 10, paddingRight: 10 }}
                                name="education"
                                active={activeItem === "education"}
                                onClick={this.handleItemClick}
                            >
                                Education
                    </Menu.Item>
                        </Link>
                        <Link activeClass="active" className="portfolio" to="portfolio" spy={true} smooth={true} duration={500} >
                            <Menu.Item
                                style={{ paddingLeft: 10, paddingRight: 10 }}
                                name="portfolio"
                                active={activeItem === "portfolio"}
                                onClick={this.handleItemClick}
                            >
                                Projects
                    </Menu.Item>
                        </Link>
                        </Menu>
                    </Responsive>

            </Segment>
        );
    };
};