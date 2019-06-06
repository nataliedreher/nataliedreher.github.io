import React from 'react';
import { Image, Grid, Header } from 'semantic-ui-react';
import HTMLLogo from "../../images/HTML-Logo.svg";
import CSSLogo from "../../images/CSS-Logo.svg";
import JSLogo from "../../images/JS-Logo.svg";
import ReactLogo from "../../images/React-Logo.svg";
import NodeLogo from "../../images/Node-Logo.svg";
import BootstrapLogo from "../../images/Boostrap-Logo.svg";
import ExpressLogo from "../../images/Express-Logo.png";
import MongoLogo from "../../images/MongoDB-Logo.svg";
import MySQLLogo from "../../images/MySQL-Logo.svg";


function Skills() {

    return (
        <div id="skills-wrapper">
            <Header id="skill-header" style={{ textAlign: "center", marginBottom: 30 }} as='h2'>Skills</Header>
            <Grid columns={6}>
                <Grid.Row style={{ display: "flex", justifyContent: "space-between" }}>
                    <Image src={HTMLLogo} style={{ height: 60 }} />
                    <Image src={CSSLogo} style={{ height: 60 }} />
                    <Image src={JSLogo} style={{ height: 60 }} />
                    <Image src={ReactLogo} style={{ height: 60 }} />
                    <Image src={NodeLogo} style={{ height: 60 }} />
                    <Image src={BootstrapLogo} style={{ height: 60 }} />
                    <Image src={ExpressLogo} style={{ height: 60 }} />
                    <Image src={MongoLogo} style={{ height: 60 }} />
                    <Image src={MySQLLogo} style={{ height: 60 }} />
                </Grid.Row>
            </Grid>
        </div>

    );
};

export default Skills;