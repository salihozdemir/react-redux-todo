import React from 'react'
import { connect } from 'react-redux'
import { filterTasks } from '../../redux'

import Button from '../button'

import './task-filters.css'

const TaskFilters = ({ filterTasks, filterType }) => {
  return (
    <ul className="task-filters">
      <li>
        <Button
          className={filterType === 'View All' ? 'active-filter' : undefined}
          onClick={() => filterTasks('View All')}
        >
          View All
        </Button>
      </li>
      <li>
        <Button
          className={filterType === 'Active' ? 'active-filter' : undefined}
          onClick={() => filterTasks('Active')}
        >
          Active
        </Button>
      </li>
      <li>
        <Button
          className={filterType === 'Completed' ? 'active-filter' : undefined}
          onClick={() => filterTasks('Completed')}
        >
          Completed
        </Button>
      </li>
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    filterType: state.filterType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterTasks: (filterType) => dispatch(filterTasks(filterType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFilters)
