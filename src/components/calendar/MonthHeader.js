import React from "react"
import formatDate from "date-fns/format"

import HeaderButton from "./HeaderButton"

export default function MonthHeader({
  activeMonth,
  onActiveMonthChange
}) {
  return (
    <div className="calendar__month_header_container">
      <HeaderButton
        arrow="<"
        enabled={true}
        onActiveMonthChange={onActiveMonthChange}
      />
      <div className="calendar__month-header__date">
        {formatDate(activeMonth, "MMMM YYYY")}
      </div>
      <HeaderButton
        arrow=">"
        enabled={true}
        onActiveMonthChange={onActiveMonthChange}
      />
    </div>
  )
}