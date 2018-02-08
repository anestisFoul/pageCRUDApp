import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Image } from 'semantic-ui-react'

const PageHeader = ({content}) => (
  <Header as='h1' className="mainTitle">
    <Image as={Link} to="/" circular src='../images/logo.png' size='medium' />
    {content}
  </Header>
)

export default PageHeader
  