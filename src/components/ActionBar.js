import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByActive, sortByTitle } from '../actions/pageFilters';
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'

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
        <Menu attached='top'>
          <Dropdown placeholder='Sort By' defaultValue="title" fluid selection options={this.sortingOptions} onChange={this.filterChange.bind(this)}/>

          <Menu.Menu position='right'>
            <div className='ui right aligned category search item'>
              <div className='ui transparent icon input'>
                <input type="text" className='prompt' placeholder='Filter pages...' value={this.props.filters.text} onChange={(e) => {this.props.dispatch(setTextFilter(e.target.value));}}/>
                <i className='search icon' />
              </div>
              <div className='results' />
            </div>
          </Menu.Menu>
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
