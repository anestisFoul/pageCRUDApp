import React from 'react';
import { connect } from 'react-redux';
import { addPage } from '../actions/pageActions';
import FormForValidation from './Form';
import { Container, Grid, Header,  Image, Divider } from 'semantic-ui-react'
import moment from 'moment'

const AddPage = (props) => {
  let ready = false

  const onSubmit = (page) => {
    page.publishedOn = moment(page.publishedOn).format()
    props.dispatch(addPage(page))
         .then(
            response => {
              ready= !ready
              if(ready)
                props.history.push('/')}
            )
  }

  return (
    <Container fluid>
      <Header as='h1' className="mainTitle">
        <Image circular src='../images/logo.png' size='medium' />
        {'Add New Page'}
      </Header>

      <Grid centered columns={2}>
        <Grid.Column>
          <FormForValidation
            initialValues = {{isActive:true}}
            onSubmit={onSubmit}
          />
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default connect()(AddPage)
