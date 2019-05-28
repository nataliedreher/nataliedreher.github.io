import React from 'react';
import { Container, Header, List } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css";

function Contact() {

    return(
        <div style={{margin: 15}}>
        <Header as="h2" >Contact</Header>
        <List>
    <List.Item icon='linkedin' content={<a href="https://www.linkedin.com/in/natalie-dreher-79683742" target="_blank" rel="noopener noreferrer">Natalie Dreher</a>} />
    <List.Item icon='github' content={<a href='https://github.com/natalied84'>Github</a>} />
    <List.Item icon='marker' content='Denver, CO' />
    <List.Item
      icon='mail'
      content={<a href='mailto:n-dreher@hotmail.com'>n-dreher@hotmail.com</a>}
    />
  </List>

        
        
      </div>
    )

}

export default Contact;