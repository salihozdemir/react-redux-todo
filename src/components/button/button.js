import React from 'react'
import classNames from 'classnames'

import './button.css'

const Button = ({ children, type = 'button', className, ...props }) => {
  const cssClasses = classNames('btn', className)
  return (
    <button className={cssClasses} type={type} {...props}>
      {children}
    </button>
  )
}

export default Button
