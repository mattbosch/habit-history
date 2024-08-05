import React from "react";
import { format, addDays, startOfWeek, subWeeks } from "date-fns";
import "./SummaryTable.css";

const SummaryTable = ({ data }) => {
  const startDate = subWeeks(startOfWeek(new Date(), {weekStartsOn: 1}), 51);
  const weeks = Array.from({ length: 52 }, (_, i) => addDays(startDate, i * 7));
  const days = Array.from({ length: 7 }, (_, i) =>
    addDays(startOfWeek(new Date(), {weekStartsOn: 1}), i)
  );

  const getHabitCount = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    return data[formattedDate] || 0;
  };

  const getColor = (count) => {
    if (count > 4) return "#1e6823";
    if (count > 2) return "#44a340";
    if (count > 0) return "#8cc665";
    return "#ebedf0";
  };

  return (
    <>
      <div className="summary-table">
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className="week-row">
            <div className="day-label">
              {format(day, "EEEEEE")}
              {/* 'EEEEE' for short names, 'EEEEEE' for full names */}
            </div>
            {weeks.map((week, weekIndex) => {
              const currentDate = addDays(week, dayIndex);
              const count = getHabitCount(currentDate);
              return (
                <div
                  key={weekIndex}
                  className="day"
                  style={{ backgroundColor: getColor(count) }}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default SummaryTable;
