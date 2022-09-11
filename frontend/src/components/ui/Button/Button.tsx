import "./Button.css"
import { IButtonProps } from '@/types/IButton'

function Button({ value, text, small, large, color, flat, plain, noshadow }: IButtonProps) {
  const classNames = ["button"]
  if (text) classNames.push("button-text")
  if (small) classNames.push("button-small")
  if (large) classNames.push("button-large")
  if (flat) classNames.push("button-flat")
  if (plain) classNames.push("button-plain")
  if (noshadow) classNames.push("button-noshadow")

  return (
    <div className={classNames.join(" ")} style={color ? { color } : {}}>
      <span>{value}</span>
    </div>
  )
}

export default Button