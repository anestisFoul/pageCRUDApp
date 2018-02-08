import React from 'react';
import { Link } from 'react-router-dom'
import { Divider, Button, Message, Icon } from 'semantic-ui-react'

export const loadingMessage = (
  <Message icon info>
    <Icon name='circle notched' loading />
    <Message.Content>
      <Message.Header>Just one second</Message.Header>
        We are fetching that content for you.
    </Message.Content>
  </Message>
)

export const errorMessage = (message) => (
  <div>
    <Message icon negative size='big'>
      <Icon name='wait' />
      <Message.Content>
        <Message.Header>An error occured</Message.Header>
        {message}
     </Message.Content>
    </Message>
    <Divider></Divider>
    <Button as={Link} to="/" content='Back to Dashboard' icon='home' labelPosition='left' className="homeBtn" color='black' />
  </div>
)