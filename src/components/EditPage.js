import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form'
import { Container, Grid, Header,  Image, Divider, Button, Message, Icon } from 'semantic-ui-react'
import PageHeader from './Header'
import FormForValidation from './Form'
import { errorMessage, loadingMessage } from './Messages'
import { editPage } from '../actions/pageActions'
import moment from 'moment'

const EditPage = ({page, loading, errors, dispatch, history}) => {
  const onSubmit = (page) => {
    let pageToSend = {
      ...page,
      publishedOn: moment(page.publishedOn).format(),
      type: page.type == '3' ? '0' : page.type
    }
    dispatch(editPage(page.id, pageToSend))
      .then(
        response => {
          history.push('/')}
      )
      .catch(err => {
        throw new SubmissionError(errors.message)
      })
  }

  const PageContent = (
    <FormForValidation
      initialValues = {page ? {'id':page.id,'title':page.title,'description':page.description,'type': page.type == 0 ? '3' : page.type,'isActive':page.isActive,'publishedOn': page.publishedOn } : page}
      onSubmit = {onSubmit}
    />
  )

  return (
    <Container fluid>
      <PageHeader content='Edit Page'/>

      <Grid centered stackable columns={2}>
        <Grid.Column>
          { loading && loadingMessage }
          { errors.message && errorMessage(errors.message) }
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
  }
}

export default connect(mapStateToProps)(EditPage);
