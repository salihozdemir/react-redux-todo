import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  DELETE_TASKS_REQUEST,
  DELETE_TASKS_SUCCESS,
  DELETE_TASKS_FAILURE,
  FILTER_TASKS
} from './taskTypes'

const initialState = {
  loading: false,
  tasks: [],
  error: '',
  filterType: 'View All'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
        error: ''
      }
    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        error: ''
      }
    case CREATE_TASK_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case UPDATE_TASK_SUCCESS:
      const index = state.tasks.findIndex(
        (task) => task._id === action.payload._id
      )
      const newArray = [...state.tasks]
      newArray[index] = action.payload

      return {
        ...state,
        tasks: newArray,
        error: ''
      }
    case UPDATE_TASK_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload._id),
        error: ''
      }
    case DELETE_TASK_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case DELETE_TASKS_REQUEST:
      return {
        ...state,
        loading: false
      }
    case DELETE_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: [],
        error: ''
      }
    case DELETE_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case FILTER_TASKS:
      return {
        ...state,
        filterType: action.payload
      }
    default:
      return state
  }
}

export default reducer
