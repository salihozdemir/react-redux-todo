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

  return (
    <div className="task-list">
      {taskData.loading ? (
        <h2>Loading</h2>
      ) : taskData.error ? (
        taskData.error
      ) : taskData?.filteredTasks?.length > 0 ? (
        taskData.filteredTasks.map((task, index) => (
          <TaskItem
            key={index}
            title={task.title}
            order={task.order}
            completed={task.completed}
            taskUrl={task.url}
          />
        ))
      ) : (
        taskData.tasks.map((task, index) => (
          <TaskItem
            key={index}
            title={task.title}
            order={task.order}
            completed={task.completed}
            taskUrl={task.url}
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
