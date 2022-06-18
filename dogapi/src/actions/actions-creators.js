import axios from 'axios';
export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const ADD_DOG = 'ADD_DOG'

 
export const getDogs = () => {
    return(dispatch => {
        dispatch({type: FETCH_START})
        axios.get('https://dog.ceo/api/breeds/image/random')
         .then(res => {
           dispatch({type: FETCH_SUCCESS, payload: res.data.message})
         })
       })
}

export const fetchStart = (status) => {
    return ({type: FETCH_START, payload:status})
}

export const fetchSuccess = (message) => {
    return({type: FETCH_SUCCESS, payload:message})
}

export const addDog = (message) => {
    return ({type: ADD_DOG, payload:message})
}