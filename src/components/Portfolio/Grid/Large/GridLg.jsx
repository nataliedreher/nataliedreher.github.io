import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid } from 'semantic-ui-react';
import PortfolioItems from '../Items/Items';

function PortfolioGridLg(props) {

  const rowOne = [];
  const rowTwo = [];
  for (let i = 0; i < props.itemData.length; i++) {
    if (i < 4) rowOne.push(props.itemData[i])
    else rowTwo.push(props.itemData[i])
  };

  return (
    <Grid columns={4} >
      <Grid.Row>
        {rowOne.map(item => (
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
        ))}
      </Grid.Row>
      <Grid.Row>
      {rowTwo.map(item => (
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
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default PortfolioGridLg;