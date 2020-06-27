import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
} from './constants.js'


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://my.api.mockaroo.com/robots.json?key=689f73b0')
    .then(response => response.json())
    .then(robots => dispatch({
        type: REQUEST_ROBOTS_SUCCESS,
        payload:robots.filter(one => one.name.length <= 18 && one.email.length <= 27 )
        }))
    .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload:error}))
}