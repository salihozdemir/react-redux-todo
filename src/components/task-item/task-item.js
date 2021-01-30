import React, { useState } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'

import { updateTask } from '../../redux'

import Button from '../button'
import { TiTick, TiDeleteOutline } from 'react-icons/ti'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'

import './task-item.css'

const TaskItem = ({ title, order, completed, taskUrl, updateTask }) => {
  const [isEditing, setEditing] = useState(false)

  const handleMark = () => {
    updateTask(taskUrl, { completed: !completed })
  }

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      updateTitle(event)
    } else if (event.keyCode === 27) {
      setEditing(false)
    }
  }

  const updateTitle = (event) => {
    if (isEditing) {
      const newTitle = event.target.value.trim()
      if (title.length && title !== newTitle) {
        updateTask(taskUrl, { title: newTitle })
      }
      setEditing(false)
    }
  }

  return (
    <div className="task-item">
      <Button
        className={cx('btn--icon', { active: completed })}
        onClick={handleMark}
      >
        <TiTick />
      </Button>
      {isEditing ? (
        <input
          className={cx('task-item__input ', {
            'task-item--completed': completed
          })}
          autoComplete="off"
          autoFocus
          defaultValue={title}
          type="text"
          maxLength="64"
          onKeyUp={handleKeyUp}
        />
      ) : (
        <p
          className={cx('task-item__title ', {
            'task-item--completed': completed
          })}
        >
          {title}
        </p>
      )}

      <div className="task-item__actions">
        {isEditing ? (
          <Button
            className="btn--icon btn--stopEdit"
            onClick={() => setEditing(false)}
          >
            <TiDeleteOutline />
          </Button>
        ) : (
          <>
            <Button
              className="btn--icon btn--edit"
              onClick={() => setEditing(true)}
            >
              <AiOutlineEdit />
            </Button>
            <Button className="btn--icon btn--delete">
              <BsTrash />
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (taskUrl, value) => dispatch(updateTask(taskUrl, value))
  }
}

export default connect(null, mapDispatchToProps)(TaskItem)
