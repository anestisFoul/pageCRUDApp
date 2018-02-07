import React, {Component} from 'react'
import { Button, Card, Image, Message, Icon } from 'semantic-ui-react'
import PageListItem from './PageListItem'
import { fetchPages, removePage } from '../actions/pageActions'
import showPages from '../helpers/sorting'

const PageList = ({pages, loading, errors, removePage}) => {
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
    <Message icon negative>
      <Icon name='wait' />
      <Message.Content>
        <Message.Header>An error occured</Message.Header>
        {errors.message}
     </Message.Content>
    </Message>
  )

  const pageItems = () => {
    return pages.map(page => {
      return (
        <PageListItem key={page.id} {...page} removePage={removePage}/>
      )
    })
  }

  const pagesList = (
    <Card.Group itemsPerRow={3}>
      { pageItems() }
    </Card.Group>
  )

  return (
    <div>
      { loading && loadingMessage }
      { errors.global && errorMessage }
      { pages.length > 0 && !loading && pagesList }
    </div>
  )
} 

export default PageList
