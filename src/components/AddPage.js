import React from 'react'
import { Link } from 'react-router-dom'
import { SubmissionError } from 'redux-form'
import { connect } from 'react-redux';
import { addPage } from '../actions/pageActions'
import PageHeader from './Header'
import FormForValidation from './Form'
import { errorMessage } from './Messages'
import { Container, Grid, Header,  Image, Divider, Message, Icon, Button } from 'semantic-ui-react'
import moment from 'moment'

const AddPage = ({dispatch, history, errors, ready}) => {
  const onSubmit = (page) => {
    page.publishedOn = moment(page.publishedOn).format()
    page.type == '3' ? page.type = '0' : page.type
    dispatch(addPage(page))
      .then(
        response => {
          ready = !ready
          if(ready)
            history.push('/')
        }
      )
      .catch(err => {
        throw new SubmissionError(errors.message)
      })
  }

  const PageContent = (
    <FormForValidation
      initialValues = {{isActive:true}}
      onSubmit={onSubmit}
    />
  )

  return (
    <Container fluid>
      <PageHeader content='Add New Page'/>

      <Grid centered stackable columns={2}>
        <Grid.Column>
          { errors.message && errorMessage(errors.message) }
          { !errors.message && PageContent }
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
