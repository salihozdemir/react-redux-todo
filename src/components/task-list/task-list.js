import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTasks, deleteTasks } from '../../redux'

import TaskItem from '../task-item'
import Button from '../button'

import './task-list.css'

const TaskList = ({ taskData, fetchTasks, deleteTasks }) => {
  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  const handleClearTasks = () => {
    const res = window.confirm('Are you sure delete all todos?')
    if (res) {
      deleteTasks()
    }
  }

  const swichExpression = () => {
    switch (taskData.filterType) {
      case 'View All':
        return () => Boolean
      case 'Active':
        return (task) => task.completed === false
      case 'Completed':
        return (task) => task.completed === true
      default:
        return () => Boolean
    }
  }

  return (
    <div className="task-list">
      {taskData.loading ? (
        <h2>Loading</h2>
      ) : taskData.error ? (
        taskData.error
      ) : (
        taskData?.tasks
          ?.filter(swichExpression())
          .map((task, index) => (
            <TaskItem
              key={index}
              title={task.title}
              completed={task.completed}
              id={task._id}
            />
          ))
      )}

      {taskData?.tasks?.length > 0 && (
        <div className="task-list__footer">
          <Button
            className="task-list__footer--button"
            onClick={handleClearTasks}
          >
            Clear All Tasks
          </Button>
        </div>
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
    fetchTasks: () => dispatch(fetchTasks()),
    deleteTasks: () => dispatch(deleteTasks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
