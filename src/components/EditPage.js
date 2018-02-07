import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Grid, Header,  Image, Divider, Button, Message, Icon } from 'semantic-ui-react'
import FormForValidation from './Form'
import { editPage } from '../actions/pageActions'
import moment from 'moment'

const EditPage = ({page, loading, errors, dispatch, history, ready}) => {
  const loadingMessage = (
    <Message icon info>
      <Icon name='circle notched' loading />
      <Message.Content>
          <Message.Header>Just one second</Message.Header>
          We are fetching that content for you.
      </Message.Content>
    </Message>
  )

  const errorMessage = (
    <div>
      <Message icon negative size='big'>
        <Icon name='wait' />
        <Message.Content>
          <Message.Header>An error occured</Message.Header>
          {errors.message}
        </Message.Content>
      </Message>
      <Divider></Divider>
      <Button as={Link} to="/" content='Back to Dashboard' icon='home' labelPosition='left' className="homeBtn" color='black' />
    </div>
  )

  const onSubmit = (page) => {
    page.publishedOn = moment(page.publishedOn).format()
    dispatch(editPage(page.id, page))
      .then(
        response => {
          ready= !ready
          if(ready)
            history.push('/')}
      )
  }

  const PageContent = (
    <FormForValidation
      initialValues = {page}
      onSubmit = {onSubmit}
    />
  )

  return (
    <Container fluid>
      <Header as='h1' className="mainTitle">
        <Image as={Link} to="/" circular src='../images/logo.png' size='medium' />
        Edit Page
      </Header>

      <Grid centered columns={2}>
        <Grid.Column>
          { loading && loadingMessage }
          { errors.message && errorMessage }
          { !loading && !errors.message && PageContent }
        </Grid.Column>
      </Grid>
    </Container>
  )
}

const mapStateToProps = (state,props) => {
  return {
    page: state.pagesStore.pages.find((page) => page.id === parseInt(props.match.params.id)),
    loading: state.pagesStore.loading,
    errors: state.pagesStore.errors,
    ready: false
  }
}

export default connect(mapStateToProps)(EditPage);
