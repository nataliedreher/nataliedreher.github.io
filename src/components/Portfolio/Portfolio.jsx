import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Grid, Header } from "semantic-ui-react"
import PortfolioItems from "./items/PortfolioItems"
import GiphyLogo from "../../images/Giphy-Logo.png"

function Portfolio() {

  return (
    <Container style={{ padding: "80px 0" }}>
      <Header style={{ textAlign: "center" }} id="portfolio-header" as="h2" >PROJECTS</Header>
      <Grid columns={4} >
        <Grid.Row>
          <PortfolioItems
            source="https://www.publicdomainpictures.net/pictures/40000/nahled/dollar-sign-white.jpg"
            flag='"Bamazon"'
            fontIcon="node"
            repo="https://github.com/natalied84/bamazon"
            projectTitle='"Bamazon"'
            technologies="Node.js, MySQL, Inquirer.js" />
          <PortfolioItems
            source="https://vignette.wikia.nocookie.net/dbxfanon/images/f/f0/Steven_Shield_WD.png/revision/latest?cb=20161011162806"
            flag="React Clicky Game"
            fontIcon="react"
            repo="https://github.com/natalied84/React-Clicky-Game"
            deployment="https://natalied84.github.io/React-Clicky-Game/"
            sandbox="https://codesandbox.io/embed/github/natalied84/React-Clicky-Game/tree/master/?fontsize=14"
            projectTitle="React Clicky Game"
            technologies="React.js" />
          <PortfolioItems
            source="https://img1.coastalliving.timeinc.net/sites/default/files/image/2015/04/main/pigeon_key2_400.jpg"
            flag="Floridaman"
            fontIcon="beer"
            repo="https://github.com/natalied84/FloridaMan"
            deployment="https://agile-reaches-72423.herokuapp.com/"
            projectTitle="Floridaman"
            technologies="React.js, Node.js, Express, Semantic-UI, Passport.js, MongoDB" />
          <PortfolioItems
            source={GiphyLogo}
            flag="Giphy API"
            fontIcon="heart outline"
            repo="https://github.com/natalied84/Giphy-HW"
            deployment="https://natalied84.github.io/Giphy-HW/"
            sandbox="https://codesandbox.io/embed/giphyhw-vymyp?fontsize=14"
            projectTitle="Giphy API"
            technologies="Bootstrap 4, JQuery, Giphy's API" />
        </Grid.Row>

        <Grid.Row>
          <PortfolioItems
            source="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png"
            flag='"Liri"'
            fontIcon="node"
            repo="https://github.com/natalied84/liri-node-app"
            projectTitle="Liri"
            technologies="Node.js, Axios, Moment.js, Inquirer.js" />
          <PortfolioItems
            source="https://img-aws.ehowcdn.com/400x400/ds-img.studiod.com/Amtrak_Cascades_cars_1.jpg"
            flag="Train Time"
            fontIcon="train"
            repo="https://github.com/natalied84/Train-Time"
            deployment="https://natalied84.github.io/Train-Time/"
            projectTitle="Train Time"
            technologies="Firebase, Moment.js, JQuery, Bootstrap 4" />
          <PortfolioItems
            source="https://yt3.ggpht.com/a/AGF-l78n1ObZIb20TfEMucfzkXY6hY2AjQL-ixgOAw=s900-mo-c-c0xffffffff-rj-k-no"
            flag='Mongo "News" Scraper'
            fontIcon="newspaper outline"
            repo="https://github.com/natalied84/Mongoose-Scraper"
            deployment="https://intense-spire-75697.herokuapp.com/"
            projectTitle='Mongo "News" Scraper'
            technologies="Node.js, Express, MongoDB, Cheerio.js, Handlebars.js" />
        </Grid.Row>
      </Grid>
    </Container>
  )
}



export default Portfolio;



