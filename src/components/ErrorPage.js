import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment, Header, Button, Icon, Image } from 'semantic-ui-react'

const ErrorPage = () => (
  <Container fluid>
    <Segment className='errorContainer'>
      <Image src='../images/error.jpg'/>
    </Segment>
    <Button as={Link} to="/" content='Back to Dashboard' className="homeBtn" />
  </Container>     
)

export default ErrorPage
