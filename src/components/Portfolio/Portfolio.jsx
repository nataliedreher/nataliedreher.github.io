import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Header, Responsive, Segment } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import PortfolioItems from './items/PortfolioItems';
import PortfolioItemsMobile from './items/PortfolioItemsMobile'
import GiphyLogo from '../../images/Giphy-Logo.png';

function Portfolio() {
  return (
    <Container style={{ padding: '80px 0' }}>
      <Header style={{ textAlign: 'center' }} id='portfolio-header' as='h2' >PROJECTS</Header>
      <Responsive as={Segment} minWidth={992}>
        <Grid columns={4} >
          <Grid.Row>
            <PortfolioItems
              source='https://www.publicdomainpictures.net/pictures/40000/nahled/dollar-sign-white.jpg'
              flag='"Bamazon"'
              fontIcon='node'
              repo='https://github.com/natalied84/bamazon'
              projectTitle='"Bamazon"'
              technologies='Node.js, MySQL, Inquirer.js'
              description='Basic CLI app that could be used to manage purchases, inventory, ect.' />
            <PortfolioItems
              source='https://vignette.wikia.nocookie.net/dbxfanon/images/f/f0/Steven_Shield_WD.png/revision/latest?cb=20161011162806'
              flag='React Clicky Game'
              fontIcon='react'
              repo='https://github.com/natalied84/React-Clicky-Game'
              deployment='https://natalied84.github.io/React-Clicky-Game/'
              sandbox='https://codesandbox.io/embed/github/natalied84/React-Clicky-Game/tree/master/?fontsize=14'
              projectTitle='React Clicky Game'
              technologies='React.js'
              description='Built using React.js, objective is to click images only once' />
            <PortfolioItems
              source='https://img1.coastalliving.timeinc.net/sites/default/files/image/2015/04/main/pigeon_key2_400.jpg'
              flag='Floridaman'
              fontIcon='beer'
              repo='https://github.com/natalied84/FloridaMan'
              deployment='https://agile-reaches-72423.herokuapp.com/'
              projectTitle='Floridaman'
              technologies='React.js, Node.js, Express, Semantic-UI, Passport.js, MongoDB'
              description='Meme webpage built to address the lack of a Floridaman API that can be called to receive JSON data' />
            <PortfolioItems
              source={GiphyLogo}
              flag='Giphy API'
              fontIcon='heart outline'
              repo='https://github.com/natalied84/Giphy-HW'
              deployment='https://natalied84.github.io/Giphy-HW/'
              sandbox='https://codesandbox.io/embed/giphyhw-vymyp?fontsize=14'
              projectTitle='Giphy API'
              technologies='Bootstrap 4, JQuery, Giphy API'
              description='App that displays reaction gifs that are obtained from the Giphy API using GET calls' />
          </Grid.Row>
          <Grid.Row>
            <PortfolioItems
              source='https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png'
              flag='"Liri"'
              fontIcon='node'
              repo='https://github.com/natalied84/liri-node-app'
              projectTitle='Liri'
              technologies='Node.js, Axios, Moment.js, Inquirer.js'
              description='Simple CLI app that can be used to look up concert infomation, get trivia, insult the user, etc.' />
            <PortfolioItems
              source='https://img-aws.ehowcdn.com/400x400/ds-img.studiod.com/Amtrak_Cascades_cars_1.jpg'
              flag='Train Time'
              fontIcon='train'
              repo='https://github.com/natalied84/Train-Time'
              deployment='https://natalied84.github.io/Train-Time/'
              projectTitle='Train Time'
              technologies='Firebase, Moment.js, JQuery, Bootstrap 4'
              description='Simple train scheduling app.' />
            <PortfolioItems
              source='https://yt3.ggpht.com/a/AGF-l78n1ObZIb20TfEMucfzkXY6hY2AjQL-ixgOAw=s900-mo-c-c0xffffffff-rj-k-no'
              flag='"News" Scraper'
              fontIcon='newspaper outline'
              repo='https://github.com/natalied84/Mongoose-Scraper'
              deployment='https://intense-spire-75697.herokuapp.com/'
              projectTitle='Mongo "News" Scraper'
              technologies='Node.js, Express, MongoDB, Cheerio.js, Handlebars.js'
              description='App built using a Express/MongoDB back-end. Allows users to search and save articles from the satire website, Clickhole.' />
            <PortfolioItems
              source='https://yt3.ggpht.com/a/AGF-l78n1ObZIb20TfEMucfzkXY6hY2AjQL-ixgOAw=s900-mo-c-c0xffffffff-rj-k-no'
              flag='Reading List'
              fontIcon='book'
              repo='https://github.com/natalied84/Reading-List'
              deployment='https://http://whispering-temple-40488.herokuapp.com/'
              projectTitle='Reading List'
              technologies='Laravel 5.8, PHP7, MySQL, jQuery, Google Books API'
              description='Reading list app built with Laravel, it features full authentication and a MySQL DB allowing users to save their lists from any browser.' />
          </Grid.Row>
        </Grid>
      </Responsive>
      <Responsive as={Segment} minWidth={768} maxWidth={991}>
        <Grid columns={2} >
          <Grid.Row>
            <PortfolioItems
              source='https://www.publicdomainpictures.net/pictures/40000/nahled/dollar-sign-white.jpg'
              flag='"Bamazon"'
              fontIcon='node'
              repo='https://github.com/natalied84/bamazon'
              projectTitle='"Bamazon"'
              technologies='Node.js, MySQL, Inquirer.js'
              description='Basic CLI app that could be used to manage purchases, inventory, ect.' />
            <PortfolioItems
              source='https://vignette.wikia.nocookie.net/dbxfanon/images/f/f0/Steven_Shield_WD.png/revision/latest?cb=20161011162806'
              flag='React Clicky Game'
              fontIcon='react'
              repo='https://github.com/natalied84/React-Clicky-Game'
              deployment='https://natalied84.github.io/React-Clicky-Game/'
              sandbox='https://codesandbox.io/embed/github/natalied84/React-Clicky-Game/tree/master/?fontsize=14'
              projectTitle='React Clicky Game'
              technologies='React.js'
              description='Built using React.js, objective is to click images only once' />
          </Grid.Row>
          <Grid.Row>
            <PortfolioItems
              source='https://img1.coastalliving.timeinc.net/sites/default/files/image/2015/04/main/pigeon_key2_400.jpg'
              flag='Floridaman'
              fontIcon='beer'
              repo='https://github.com/natalied84/FloridaMan'
              deployment='https://agile-reaches-72423.herokuapp.com/'
              projectTitle='Floridaman'
              technologies='React.js, Node.js, Express, Semantic-UI, Passport.js, MongoDB'
              description='Meme webpage built to address the lack of a Floridaman API that can be called to receive JSON data' />
            <PortfolioItems
              source={GiphyLogo}
              flag='Giphy API'
              fontIcon='heart outline'
              repo='https://github.com/natalied84/Giphy-HW'
              deployment='https://natalied84.github.io/Giphy-HW/'
              sandbox='https://codesandbox.io/embed/giphyhw-vymyp?fontsize=14'
              projectTitle='Giphy API'
              technologies='Bootstrap 4, JQuery, Giphy API'
              description='App that displays reaction gifs that are obtained from the Giphy API using GET calls' />
          </Grid.Row>
          <Grid.Row>
            <PortfolioItems
              source='https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png'
              flag='Liri'
              fontIcon='node'
              repo='https://github.com/natalied84/liri-node-app'
              projectTitle='Liri'
              technologies='Node.js, Axios, Moment.js, Inquirer.js'
              description='Simple CLI app that can be used to look up concert infomation, get trivia, insult the user, etc.' />
            <PortfolioItems
              source='https://img-aws.ehowcdn.com/400x400/ds-img.studiod.com/Amtrak_Cascades_cars_1.jpg'
              flag='Train Time'
              fontIcon='train'
              repo='https://github.com/natalied84/Train-Time'
              deployment='https://natalied84.github.io/Train-Time/'
              projectTitle='Train Time'
              technologies='Firebase, Moment.js, JQuery, Bootstrap 4'
              description='Simple train scheduling app.' />
          </Grid.Row>
          <Grid.Row>
            <PortfolioItems
              source='https://yt3.ggpht.com/a/AGF-l78n1ObZIb20TfEMucfzkXY6hY2AjQL-ixgOAw=s900-mo-c-c0xffffffff-rj-k-no'
              flag='"News" Scraper'
              fontIcon='newspaper outline'
              repo='https://github.com/natalied84/Mongoose-Scraper'
              deployment='https://intense-spire-75697.herokuapp.com/'
              projectTitle='Mongo "News" Scraper'
              technologies='Node.js, Express, MongoDB, Cheerio.js, Handlebars.js'
              description='App built using a Express/MongoDB back-end. Allows users to search and save articles from the satire website, Clickhole.' />
            <PortfolioItems
              source='https://yt3.ggpht.com/a/AGF-l78n1ObZIb20TfEMucfzkXY6hY2AjQL-ixgOAw=s900-mo-c-c0xffffffff-rj-k-no'
              flag='Reading List'
              fontIcon='book'
              repo='https://github.com/natalied84/Reading-List'
              deployment='https://http://whispering-temple-40488.herokuapp.com/'
              projectTitle='Reading List'
              technologies='Laravel 5.8, PHP7, MySQL, jQuery, Google Books API'
              description='Reading list app built with Laravel, it features full authentication and a MySQL DB allowing users to save their lists from any browser.' />
          </Grid.Row>
        </Grid>
      </Responsive>
      <Responsive as={Segment} maxWidth={767}>
        <Carousel style={{ background: 'transparent' }} showStatus={false} showThumbs={false} >
          <div style={{ background: 'transparent' }}>
            <PortfolioItemsMobile
              source='https://www.publicdomainpictures.net/pictures/40000/nahled/dollar-sign-white.jpg'
              flag='"Bamazon"'
              fontIcon='node'
              repo='https://github.com/natalied84/bamazon'
              projectTitle='"Bamazon"'
              technologies='Node.js, MySQL, Inquirer.js'
              description='Basic CLI app that could be used to manage purchases, inventory, ect.' />
          </div>
          <div style={{ background: 'transparent' }}>
            <PortfolioItemsMobile
              source='https://vignette.wikia.nocookie.net/dbxfanon/images/f/f0/Steven_Shield_WD.png/revision/latest?cb=20161011162806'
              flag='React Clicky Game'
              fontIcon='react'
              repo='https://github.com/natalied84/React-Clicky-Game'
              deployment='https://natalied84.github.io/React-Clicky-Game/'
              sandbox='https://codesandbox.io/embed/github/natalied84/React-Clicky-Game/tree/master/?fontsize=14'
              projectTitle='React Clicky Game'
              technologies='React.js'
              description='Built using React.js, objective is to click images only once' />
          </div>
          <div style={{ background: 'transparent' }}>
            <PortfolioItemsMobile
              source='https://img1.coastalliving.timeinc.net/sites/default/files/image/2015/04/main/pigeon_key2_400.jpg'
              flag='Floridaman'
              fontIcon='beer'
              repo='https://github.com/natalied84/FloridaMan'
              deployment='https://agile-reaches-72423.herokuapp.com/'
              projectTitle='Floridaman'
              technologies='React.js, Node.js, Express, Semantic-UI, Passport.js, MongoDB'
              description='Meme webpage built to address the lack of a Floridaman API that can be called to receive JSON data' />
          </div>
          <div style={{ background: 'transparent' }}>
            <PortfolioItemsMobile
              source={GiphyLogo}
              flag='Giphy API'
              fontIcon='heart outline'
              repo='https://github.com/natalied84/Giphy-HW'
              deployment='https://natalied84.github.io/Giphy-HW/'
              sandbox='https://codesandbox.io/embed/giphyhw-vymyp?fontsize=14'
              projectTitle='Giphy API'
              technologies='Bootstrap 4, JQuery, Giphy API'
              description='App that displays reaction gifs that are obtained from the Giphy API using GET calls' />
          </div>
          <div style={{ background: 'transparent' }}>
            <PortfolioItems
              source='https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png'
              flag='"Liri"'
              fontIcon='node'
              repo='https://github.com/natalied84/liri-node-app'
              projectTitle='Liri'
              technologies='Node.js, Axios, Moment.js, Inquirer.js'
              description='Simple CLI app that can be used to look up concert infomation, get trivia, insult the user, etc.' />
          </div>
          <div style={{ background: 'transparent' }}>
            <PortfolioItems
              source='https://img-aws.ehowcdn.com/400x400/ds-img.studiod.com/Amtrak_Cascades_cars_1.jpg'
              flag='Train Time'
              fontIcon='train'
              repo='https://github.com/natalied84/Train-Time'
              deployment='https://natalied84.github.io/Train-Time/'
              projectTitle='Train Time'
              technologies='Firebase, Moment.js, JQuery, Bootstrap 4'
              description='Simple train scheduling app.' />
          </div>
          <div style={{ background: 'transparent' }}>
            <PortfolioItemsMobile
              source='https://yt3.ggpht.com/a/AGF-l78n1ObZIb20TfEMucfzkXY6hY2AjQL-ixgOAw=s900-mo-c-c0xffffffff-rj-k-no'
              flag='"News" Scraper'
              fontIcon='newspaper outline'
              repo='https://github.com/natalied84/Mongoose-Scraper'
              deployment='https://intense-spire-75697.herokuapp.com/'
              projectTitle='Mongo "News" Scraper'
              technologies='Node.js, Express, MongoDB, Cheerio.js, Handlebars.js'
              description='App built using a Express/MongoDB back-end. Allows users to search and save articles from the satire website, Clickhole.' />
          </div>
          <div style={{ background: 'transparent' }}>
            <PortfolioItems
              source='https://yt3.ggpht.com/a/AGF-l78n1ObZIb20TfEMucfzkXY6hY2AjQL-ixgOAw=s900-mo-c-c0xffffffff-rj-k-no'
              flag='Reading List'
              fontIcon='book'
              repo='https://github.com/natalied84/Reading-List'
              deployment='https://http://whispering-temple-40488.herokuapp.com/'
              projectTitle='Reading List'
              technologies='Laravel 5.8, PHP7, MySQL, jQuery, Google Books API'
              description='Reading list app built with Laravel, it features full authentication and a MySQL DB allowing users to save their lists from any browser.' />
          </div>
        </Carousel>
      </Responsive>
    </Container>
  );
};

export default Portfolio;