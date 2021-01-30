import React from 'react'
import Button from '../button'

import './task-filters.css'

const TaskFilters = () => {
  return (
    <ul className="task-filters">
      <li>
        <Button>View All</Button>
      </li>
      <li>
        <Button>Active</Button>
      </li>
      <li>
        <Button>Completed</Button>
      </li>
    </ul>
  )
}

export default TaskFilters
