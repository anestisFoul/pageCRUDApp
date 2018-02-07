import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Grid, Header,  Image, Divider, Button, Message, Icon } from 'semantic-ui-react'
import FormForValidation from './Form';
import { editPage } from '../actions/pageActions';
import moment from 'moment'

const EditPage = ({page, loading, dispatch, history, ready}) => {
  const loadingMessage = (
    <Message icon info>
      <Icon name='circle notched' loading />
      <Message.Content>
          <Message.Header>Just one second</Message.Header>
          We are fetching that content for you.
      </Message.Content>
    </Message>
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
    <Grid centered columns={2}>
      <Grid.Column>
        <FormForValidation
          initialValues = {page}
          onSubmit = {onSubmit}
        />
      </Grid.Column>
    </Grid>
  )

  return (
    <Container fluid>
      <Header as='h1' className="mainTitle">
        <Image as={Link} to="/" circular src='../images/logo.png' size='medium' />
        Edit Page
      </Header>
      { loading && loadingMessage }
      { !loading && PageContent }
    </Container>
  )
}

const mapStateToProps = (state,props) => {
  return {
    page: state.pagesStore.pages.find((page) => page.id === parseInt(props.match.params.id)),
    loading: state.pagesStore.loading,
    ready: false
  }
}

export default connect(mapStateToProps)(EditPage);
