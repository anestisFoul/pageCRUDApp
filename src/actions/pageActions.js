import { FETCH_PAGES, ADD_PAGE, EDIT_PAGE, REMOVE_PAGE} from './actionTypes';
import { client } from './settings'

export const fetchPages = () => {
  return dispatch => {
    dispatch({
      type: FETCH_PAGES,
      payload: client.get()
    })
  }
}

export const addPage = (page) => {
  return dispatch => {
    return dispatch({
      type: ADD_PAGE,
      payload: client.post('',page)
    })
  }
}

export const editPage = (id, updates) => {
  return dispatch => {
    return dispatch({
      type: EDIT_PAGE,
      payload: client.put(`/${id}`, updates)
    })
  }
}

export const removePage = ({id}) => {
  return dispatch => {
    return dispatch({
      type: REMOVE_PAGE,
      payload: client.delete(`/${id}`)
    })
  }
}


