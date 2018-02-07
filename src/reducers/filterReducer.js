import { SET_TEXT_FILTER, SORT_BY_ACTIVE, SORT_BY_DATE, SORT_BY_TITLE } from '../actions/actionTypes'

const filterReducerDefaultState = {
  text: '',
  sortBy: 'title'
}
  
export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text
      }
    case SORT_BY_ACTIVE:
      return {
        ...state,
        sortBy: 'active'
      }
    case SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date'
      }
    case SORT_BY_TITLE:
      return {
        ...state,
        sortBy: 'title'
      }
    default:
      return state
  }
}