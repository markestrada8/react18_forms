import { useState } from 'react'

export function useInput(defaultValue) {
  const [enteredValue, setEnteredValue] = useState(defaultValue)
  const [didEdit, setDidEdit] = useState(false)

  function handleChange(e) {
    setEnteredValue(e.target.value)
    setDidEdit(false)
  }

  function handleBlur() {
    setDidEdit(true)
  }

  return {
    value: enteredValue,
    didEdit,
    handleChange,
    handleBlur
  }
}