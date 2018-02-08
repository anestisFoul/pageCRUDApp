import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Segment, Button, Icon } from 'semantic-ui-react'
import PageList from './PageList'
import ActionBar from './ActionBar'
import PageHeader from './Header'
import { fetchPages, removePage } from '../actions/pageActions'
import showPages from '../helpers/sorting'

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchPages()
  }

  render() {
    return (
      <Container fluid>
        <PageHeader content='Responsive Pages Dashboard'/>

        <ActionBar />

        <Segment attached='bottom' className="listContainer">
          <PageList pages={this.props.pages} loading={this.props.loading} errors={this.props.errors} removePage={this.props.removePage}/>
        </Segment>
          
        <div className="addbtnRow">
          <Button as={Link} to="/create" animated='fade' inverted color='black' circular className="actionBtn">
            <Button.Content hidden>Add Page</Button.Content>
            <Button.Content visible>
              <Icon name='plus' color="black"/>
            </Button.Content>
          </Button>
        </div>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    pages : showPages(state.pagesStore.pages, state.filters),
    loading: state.pagesStore.loading,
    errors: state.pagesStore.errors
  }
}

export default connect(mapStateToProps,{fetchPages,removePage})(Dashboard)
