import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../../redux'

import './task-form.css'

const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimTitle = title.trim()
    if (trimTitle.length) {
      createTask({ title })
    }
    setTitle('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-form__input"
        type="text"
        placeholder="What needs to be done?"
        autoComplete="off"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyUp={(e) => e.keyCode === 27 && setTitle('')}
      />
    </form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (value) => dispatch(createTask(value))
  }
}

export default connect(null, mapDispatchToProps)(TaskForm)
