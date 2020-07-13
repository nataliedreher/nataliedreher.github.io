import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Responsive, Segment } from 'semantic-ui-react';
import PortfolioLg from './Grid/Large/GridLg';
import PortfolioMd from './Grid/Medium/GridMd';
import PortfolioMobile from './Mobile/Mobile';
import ItemData from './Data/Data';


function Portfolio() {
  return (
    <Container style={{ padding: '80px 0' }}>
      <Header style={{ textAlign: 'center' }} id='portfolio-header' as='h2' >PROJECTS</Header>
      <Responsive as={Segment} minWidth={992}>
        <PortfolioLg itemData={ItemData} />
      </Responsive>
      <Responsive as={Segment} minWidth={768} maxWidth={991}>
        <PortfolioMd itemData={ItemData}  />
      </Responsive>
      <Responsive as={Segment} maxWidth={767}>
        <PortfolioMobile itemData={ItemData}  />
      </Responsive>
    </Container>
  );
};

export default Portfolio;