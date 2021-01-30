import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'

import { updateTask } from '../../redux'

import Button from '../button'
import { TiTick, TiEdit, TiDeleteOutline } from 'react-icons/ti'

import './task-item.css'

const TaskItem = ({ title, order, completed, taskUrl, updateTask }) => {
  const handleMark = () => {
    updateTask(taskUrl, { completed: !completed })
  }

  return (
    <div className="task-item">
      <Button
        className={cx('btn--icon', { active: completed })}
        onClick={handleMark}
      >
        <TiTick />
      </Button>
      <p
        className={cx('task-item__title ', {
          'task-item--completed': completed
        })}
      >
        {title}
      </p>
      <div className="task-item__actions">
        <Button className="btn--icon btn--edit">
          <TiEdit />
        </Button>
        <Button className="btn--icon btn--delete">
          <TiDeleteOutline />
        </Button>
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     taskData: state
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (taskUrl, value) => dispatch(updateTask(taskUrl, value))
  }
}

export default connect(null, mapDispatchToProps)(TaskItem)
