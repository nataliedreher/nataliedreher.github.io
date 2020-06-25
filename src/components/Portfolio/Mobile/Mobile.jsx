import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import PortfolioItems from './Items/Items'

function Portfolio(props) {
  return (
        <Carousel style={{ background: 'transparent' }} showStatus={false} showThumbs={false} >
         {props.itemData.map(item => (
          <div style={{ background: 'transparent' }}>
            <PortfolioItems
              source={item.source}
              flag={item.flag}
              fontIcon={item.fontIcon}
              repo={item.repo}
              deployment={item.deployment}
              sandbox={item.sandbox}
              title={item.title}
              technologies={item.technologies}
              description={item.description} />
          </div>))}

        </Carousel>
  );
};

export default Portfolio;