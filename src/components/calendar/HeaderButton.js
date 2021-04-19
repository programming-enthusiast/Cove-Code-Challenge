import React from "react"

export default function HeaderButton({
  arrow,
  enabled,
  onActiveMonthChange
}) {
  return (
    <button
      className="calendar__header-button"
      disabled={!enabled}
      onClick={(e) => { arrow === "<" ? onActiveMonthChange(-1) : onActiveMonthChange(1); }}
    >
      {arrow}
    </button>
  )
}