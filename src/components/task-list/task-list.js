import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTasks } from '../../redux'

import TaskItem from '../task-item'

import './task-list.css'

const TaskList = ({ taskData, fetchTasks }) => {
  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  return (
    <div className="task-list">
      {taskData.loading ? (
        <h2>Loading</h2>
      ) : taskData.error ? (
        taskData.error
      ) : (
        taskData?.tasks?.map((task, index) => (
          <TaskItem
            key={index}
            title={task.title}
            order={task.order}
            completed={task.completed}
            taskUrl={task.url}
          />
        ))
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    taskData: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: () => dispatch(fetchTasks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
