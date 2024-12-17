import React from 'react'

export default function Input({
  children,
  errorValue,
  errorMessage,
  id,
  ...props
}) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{children}</label>
      <input  {...props} />
      <div className="control-error">
        {errorValue && <p>{errorMessage}</p>}
      </div>
    </div>
  )
}
