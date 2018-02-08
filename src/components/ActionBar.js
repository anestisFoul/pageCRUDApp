import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByActive, sortByTitle } from '../actions/pageFilters';
import { Dropdown, Icon, Menu, Segment, Input } from 'semantic-ui-react'

class ActionBar extends Component {
  sortingOptions = [
    {text:'Title',value:'title'},
    {text:'Publish Date',value:'date'},
    {text:'Active',value:'active'}
  ]

  filterChange(event,data){
    if (data.value === 'date') 
      this.props.dispatch(sortByDate())
    else if (data.value === 'active') 
      this.props.dispatch(sortByActive())
    else if (data.value === 'title') 
      this.props.dispatch(sortByTitle())
  }

  render() {
    return (
      <div>
        <Menu stackable attached='top'>
          <Menu.Item position='left'>
            <Dropdown placeholder='Sort By' defaultValue="title" selection options={this.sortingOptions} onChange={this.filterChange.bind(this)}/>
          </Menu.Item>

          <Menu.Item position='right'>
            <Input type="text" className='prompt' placeholder='Filter pages...' value={this.props.filters.text} onChange={(e) => {this.props.dispatch(setTextFilter(e.target.value));}}/>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ActionBar)
