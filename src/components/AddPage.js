import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { addPage } from '../actions/pageActions'
import FormForValidation from './Form'
import { Container, Grid, Header,  Image, Divider, Message, Icon, Button } from 'semantic-ui-react'
import moment from 'moment'

const AddPage = (props) => {
  const errorMessage = (
    <div>
      <Message icon negative>
        <Icon name='wait' />
        <Message.Content>
          <Message.Header>An error occured</Message.Header>
          {props.errors.message}
      </Message.Content>
      </Message>
      <Divider></Divider>
      <Button as={Link} to="/" content='Back to Dashboard' icon='home' labelPosition='left' className="homeBtn" color='black' />
    </div>
  )

  const onSubmit = (page) => {
    page.publishedOn = moment(page.publishedOn).format()
    props.dispatch(addPage(page))
         .then(
            response => {
              props.ready= !props.ready
              if(ready)
                props.history.push('/')}
            )
  }

  const PageContent = (
    <FormForValidation
      initialValues = {{isActive:true}}
      onSubmit={onSubmit}
    />
  )

  return (
    <Container fluid>
      <Header as='h1' className="mainTitle">
        <Image circular src='../images/logo.png' size='medium' />
        {'Add New Page'}
      </Header>

      <Grid centered columns={2}>
        <Grid.Column>
          { props.errors.message && errorMessage }
          { !props.errors.message && PageContent }
        </Grid.Column>
      </Grid>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    errors: state.pagesStore.errors,
    ready: false
  }
}

export default connect(mapStateToProps)(AddPage)
