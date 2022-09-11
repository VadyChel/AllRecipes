import "./Input.css"
import { IInputProps } from '@/types/IInput'
import { useState } from 'react'

function Input({ value, placeholder, flat, noshadow }: IInputProps) {
  const [localValue, setLocalValue] = useState(value)
  const classNames = ["input"]
  if (flat) classNames.push("input-flat")
  if (noshadow) classNames.push("input-noshadow")

  return (
    <input
      className={classNames.join(" ")}
      type="text"
      value={localValue}
      placeholder={placeholder}
      onInput={e => setLocalValue(e.currentTarget.value)}
    />
  )
}

export default Input