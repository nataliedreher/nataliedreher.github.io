import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Header, Dimmer, Icon, Image, Button } from "semantic-ui-react"
import "../../Portfolio.css";


class MobileItem extends Component {

    state = {

    }

    handleShow = () => this.setState({ active: true });
    handleHide = () => this.setState({ active: false });

    componentWillUnmount() {
        // this component needs this empty componentWillUnmount because of the carousel in it's parent
    }

    render() {
        const { active } = this.state;
        const content = (
            <>
                <Header as="h3" inverted>
                    Technologies:
                </Header>
                <p>{this.props.technologies}</p>
                <p>{this.props.description}</p>
                <Button primary>
                    <Icon name="github" />
                    Repository
                    </Button>
                {this.props.deployment ? <Button primary as="a" href={this.props.deployment} target="_blank" rel="noopener noreferrer">
                    <Icon name="desktop" />
                    Deployment
                        </Button> : <></>}
            </>
        );

        return (
            <Dimmer.Dimmable
                as={Image}
                fluid
                label={{ as: "a", color: "blue", content: this.props.flag, icon: this.props.fontIcon, attached: "top" }}
                className="project-icon"
                src={this.props.source}
                onClick={this.imageClick}
                dimmed={active}
                dimmer={{ active, content }}
                onMouseEnter={this.handleShow}
                onMouseLeave={this.handleHide}
                style={{ padding: "0" }} />
        );
    };
};


export default MobileItem;