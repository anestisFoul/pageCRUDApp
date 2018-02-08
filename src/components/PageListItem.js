import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Icon, Popup } from 'semantic-ui-react'

const PageListItem = ({ id, title, description, type, isActive, publishedOn, removePage }) => {
  const displayPageType = (type) => {
    switch (type) {
      case 0: return <p><Icon name='info circle' color='blue'/>Menu</p>
      case 1: return <p><Icon name='info circle' color='red'/>Event</p>
      case 2: return <p><Icon name='info circle' color='violet'/>Content</p>
      default: return <p><Icon name='info circle'/></p>
    }
  } 

  return (
    <Card>
    <Card.Content>
      <Card.Header>
        <Icon name='asterisk'/> {title}
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Description>
        <p><Icon name='browser'/> {description && (description.length > 50) ? description.substring(0,50)+'...' : description}</p>
        
        { displayPageType(type)}
        
        <p>{isActive===true ? <span><Icon name='checkmark' color='green'/><i>Active</i></span> : <span><Icon name='x' color='red'/><i>Inactive</i></span>}</p>

        <p><Icon name='clock'/> {publishedOn}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Button basic color="green" as={Link} to={`/edit/${id}`}>Edit</Button>
        <Popup
          trigger={<Button basic color="red">Delete</Button>}
          content={<Button inverted color='red' content='Are you sure ?' onClick = {() => { removePage({ id: id }) }} />}
          on='click'
          position='top right'
        />
      </div>
    </Card.Content>
  </Card>
  )
}

export default PageListItem
