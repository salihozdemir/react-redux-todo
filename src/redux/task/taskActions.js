import axios from 'axios'

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

//#region Fetch
export const fetchTasksRequest = () => {
  return {
    type: FETCH_TASKS_REQUEST
  }
}

export const fetchTasksSuccess = (tasks) => {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload: tasks
  }
}

export const fetchTasksFailure = (error) => {
  return {
    type: FETCH_TASKS_FAILURE,
    payload: error
  }
}

export const fetchTasks = () => {
  return function (dispatch) {
    dispatch(fetchTasksRequest())
    axios
      .get('https://todo-backend-express-csp.herokuapp.com')
      .then((response) => {
        const tasks = response.data
        dispatch(fetchTasksSuccess(tasks))
      })
      .catch((error) => {
        dispatch(fetchTasksFailure(error.message))
      })
  }
}
//#endregion

//#region Create
export const createTaskSuccess = (task) => {
  return {
    type: CREATE_TASK_SUCCESS,
    payload: task
  }
}

export const createTaskFailure = (error) => {
  return {
    type: CREATE_TASK_FAILURE,
    payload: error
  }
}

export const createTask = (value) => {
  return function (dispatch) {
    axios
      .post('https://todo-backend-express-csp.herokuapp.com', value)
      .then((response) => {
        const task = response.data
        dispatch(createTaskSuccess(task))
      })
      .catch((error) => {
        dispatch(createTaskFailure(error.message))
      })
  }
}
//#endregion

//#region Update
export const updateTaskSuccess = (task) => {
  return {
    type: UPDATE_TASK_SUCCESS,
    payload: task
  }
}

export const updateTaskFailure = (error) => {
  return {
    type: UPDATE_TASK_FAILURE,
    payload: error
  }
}

export const updateTask = (taskUrl, value) => {
  return function (dispatch) {
    axios
      .patch('https' + taskUrl.slice(4), value)
      .then((response) => {
        const task = response.data
        dispatch(updateTaskSuccess(task))
      })
      .catch((error) => {
        dispatch(updateTaskFailure(error.message))
      })
  }
}
//#endregion

//#region Delete
export const deleteTaskSuccess = (task) => {
  return {
    type: DELETE_TASK_SUCCESS,
    payload: task
  }
}

export const deleteTaskFailure = (error) => {
  return {
    type: DELETE_TASK_FAILURE,
    payload: error
  }
}

export const deleteTask = (taskUrl) => {
  return function (dispatch) {
    axios
      .delete('https' + taskUrl.slice(4))
      .then((response) => {
        const task = response.data
        dispatch(deleteTaskSuccess(task))
      })
      .catch((error) => {
        dispatch(deleteTaskFailure(error.message))
      })
  }
}
//#endregion

//#region Delete All
export const deleteTasksRequest = () => {
  return {
    type: DELETE_TASKS_REQUEST
  }
}

export const deleteTasksSuccess = () => {
  return {
    type: DELETE_TASKS_SUCCESS
  }
}

export const deleteTasksFailure = (error) => {
  return {
    type: DELETE_TASKS_FAILURE,
    payload: error
  }
}

export const deleteTasks = () => {
  return function (dispatch) {
    dispatch(deleteTasksRequest())
    axios
      .delete('https://todo-backend-express-csp.herokuapp.com')
      .then(() => {
        dispatch(deleteTasksSuccess())
      })
      .catch((error) => {
        dispatch(deleteTasksFailure(error.message))
      })
  }
}
//#endregion

export const filterTasks = (filterType) => {
  return {
    type: FILTER_TASKS,
    payload: filterType
  }
}
