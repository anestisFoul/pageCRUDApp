import { FETCH_PAGES_FULFILLED, FETCH_PAGES_PENDING, FETCH_PAGES_REJECTED, 
        ADD_PAGE_FULFILLED, ADD_PAGE_PENDING, ADD_PAGE_REJECTED, 
        EDIT_PAGE_FULFILLED, EDIT_PAGE_PENDING, EDIT_PAGE_REJECTED, 
        REMOVE_PAGE_FULFILLED} from '../actions/actionTypes'

const pageReducerDefaultState = {
  pages: [],
  loading: false,
  errors: {}
}

export default (state = pageReducerDefaultState, action) => {
  switch(action.type) {
    case FETCH_PAGES_FULFILLED: 
      return {
        ...state,
        pages: action.payload.data,
        loading: false
      }
    case FETCH_PAGES_PENDING: 
      return {
        ...state,
        loading: true,
        errors: {}
      }
    case FETCH_PAGES_REJECTED:
      return {
        ...state,
        loading: false,
        errors: { message: action.payload.message == 'Network Error' ? 'A Newtwork error occured while fetching content. Please try refreshing the page.' : 'An error occured. Please try refreshing the page in a few seconds.' }
      }

    case ADD_PAGE_PENDING: 
      return {
        ...state,
        loading: true,
        errors: {}
      }
    case ADD_PAGE_FULFILLED: 
      return {
        ...state,
        pages: [...state.pages, action.payload.data],
        loading: false
      }
    case ADD_PAGE_REJECTED: 
      return {
        ...state,
        loading: false,
        errors: { message: action.payload.message == 'Network Error' ? 'A Newtwork error occured. Please go back and try again.' : 'An error occured while submitting the form. Please go back and try again.' }
      }

    case EDIT_PAGE_PENDING: 
      return {
        ...state,
        loading: true,
        errors: {}
      }

    case EDIT_PAGE_FULFILLED: 
      return {
        ...state,
        pages: state.pages.map(page => page.id === action.payload.data.id ? action.payload.data : page),
        loading: false
      }

    case EDIT_PAGE_REJECTED: 
      return {
        ...state,
        loading: false,
        errors: { message: action.payload.message == 'Network Error' ? 'A Newtwork error occured. Please go back and try again.' : 'An error occured while submitting the form. Please go back and try again.' }
      }

    case REMOVE_PAGE_FULFILLED: 
      return {
        ...state,
        pages: state.pages.filter(page => page.id !== action.payload.data.id)
      }
    default :
      return state
  }
}