import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid } from 'semantic-ui-react';
import PortfolioItems from '../Items/Items';

function PortfolioMd(props) {

  const split = [];
  for (let i = 0; i < props.itemData.length; i += 2) {
    split.push([props.itemData[i], props.itemData[i + 1]])
  };

  return (
    <Grid columns={2} >
      {split.map(item => (
        <Grid.Row>
          <PortfolioItems
            source={item[0].source}
            flag={item[0].flag}
            fontIcon={item[0].fontIcon}
            repo={item[0].repo}
            deployment={item[0].deployment}
            sandbox={item[0].sandbox}
            title={item[0].title}
            technologies={item[0].technologies}
            description={item[0].description} />
          <PortfolioItems
            source={item[1].source}
            flag={item[1].flag}
            fontIcon={item[1].fontIcon}
            repo={item[1].repo}
            deployment={item[1].deployment}
            sandbox={item[1].sandbox}
            title={item[1].title}
            technologies={item[1].technologies}
            description={item[1].description} />
        </Grid.Row>
      ))}
    </Grid>
  );
};

export default PortfolioMd;