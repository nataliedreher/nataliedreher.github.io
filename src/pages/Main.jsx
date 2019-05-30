import React from 'react';
import { Container, Header, Grid } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css";

function Main() {

  return (
    <Container style={{ margin: "0 0 50px 0" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Header as="h2" >EDUCATION</Header>
          </Grid.Column>
          <Grid.Column width={10}>
            <Header as="h4" >UNIVERSITY OF DENVER FULL-STACK FLEX WEB DEVELOPMENT BOOTCAMP</Header>
            <Header as="h5" >UNIVERSITY COLLEGE CERTIFICATE OF COMPLETION • FEBRUARY 2019 - MAY 2019</Header>
            <p>Acquired key skills for front and back-end development through a thorough curriculum including HTML5, CSS3, JavaScript, jQuery, Node.js, PHP, Laravel, Express.js, React.js, Database Theory, MongoDB, MySQL, Command Line, Git, and more.</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6} />
          <Grid.Column width={10}>
            <Header as="h4" >METROPOLITAN STATE UNIVERSITY OF DENVER</Header>
            <Header as="h5" >BACHELOR'S OF ARTS IN ECONOMICS AND MATHEMATICS • 2012</Header>
            <p>Learned multivariable calculus, differential equations, engineering statistics, game theory, critical thinking, logic, number theory, combinatorics.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )

}

export default Main;