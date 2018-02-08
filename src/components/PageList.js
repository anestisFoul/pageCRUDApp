import React, {Component} from 'react'
import { Button, Card, Image, Message, Icon } from 'semantic-ui-react'
import PageListItem from './PageListItem'
import { errorMessage, loadingMessage } from './Messages'
import { fetchPages, removePage } from '../actions/pageActions'
import showPages from '../helpers/sorting'

const PageList = ({pages, loading, errors, removePage}) => {
  const pageItems = () => {
    return pages.map(page => {
      return (
        <PageListItem key={page.id} {...page} removePage={removePage}/>
      )
    })
  }

  const pagesList = (
    <Card.Group stackable itemsPerRow={3}>
      { pageItems() }
    </Card.Group>
  )

  return (
    <div>
      { loading && loadingMessage }
      { errors.message && errorMessage(errors.message) }
      { pages.length > 0 && !loading && pagesList }
    </div>
  )
} 

export default PageList
