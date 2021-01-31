import React, { useState } from 'react'
import { connect } from 'react-redux'
import { filterTasks } from '../../redux'

import Button from '../button'

import './task-filters.css'

const TaskFilters = ({ filterTasks }) => {
  const [active, setActive] = useState('View All')

  const handleFilter = (completed, whichButton = 'View All') => {
    filterTasks(completed)
    setActive(whichButton)
  }

  return (
    <ul className="task-filters">
      <li>
        <Button
          className={active === 'View All' ? 'active-filter' : undefined}
          onClick={() => handleFilter()}
        >
          View All
        </Button>
      </li>
      <li>
        <Button
          className={active === 'Active' ? 'active-filter' : undefined}
          onClick={() => handleFilter(false, 'Active')}
        >
          Active
        </Button>
      </li>
      <li>
        <Button
          className={active === 'Completed' ? 'active-filter' : undefined}
          onClick={() => handleFilter(true, 'Completed')}
        >
          Completed
        </Button>
      </li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterTasks: (value) => dispatch(filterTasks(value))
  }
}

export default connect(null, mapDispatchToProps)(TaskFilters)
