import { FETCH_START } from '../actions/actions-creators'
import { FETCH_SUCCESS } from '../actions/actions-creators'
import { ADD_DOG } from '../actions/actions-creators'

const initialState = {
    message: '',
    status: '',
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
      case FETCH_START: 
        return {
            ...state,
            status: action.payload,
            error: '',
             
        }
      case FETCH_SUCCESS:
        return {
            ...state,
            status: initialState,
            message: action.payload,
            error:''
        }
        case ADD_DOG:
          const newDog = {
              ...action.payload,
              id: Date.now()
          }
          return {
              ...state, 
              message: [...state.message, newDog]
          }
      default:
        return(state)
    }
}


export default reducer