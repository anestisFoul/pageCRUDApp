import { SORT_BY_TITLE, SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_ACTIVE} from './actionTypes'

export const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text
})
  
export const sortByDate = () => ({
  type: SORT_BY_DATE
})
  
export const sortByActive = () => ({
  type: SORT_BY_ACTIVE
})
  
export const sortByTitle = () => ({
  type: SORT_BY_TITLE,
})
  