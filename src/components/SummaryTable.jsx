import { format, addDays, startOfWeek, subWeeks } from "date-fns";
import { HabitDay } from "./HabitDay";
import { useState } from "react"

export function SummaryTable({ data }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const startDate = subWeeks(startOfWeek(new Date(), { weekStartsOn: 1 }), 51);
  const weeks = Array.from({ length: 52 }, (_, i) => addDays(startDate, i * 7));
  const days = Array.from({ length: 7 }, (_, i) =>
    addDays(startOfWeek(new Date(), { weekStartsOn: 1 }), i)
  );

  const getHabitCount = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    return data[formattedDate] || 0;
  };

  const getColor = (count) => {
    if (count > 4) return "#1e6823";
    if (count > 2) return "#44a340";
    if (count > 0) return "#8c665";
    return "#ebedf0";
  };

  const openPopover = (date) => {
    setSelectedDate(date);
  }

  return (
    <>
      <div className="w-full flex flex-col">
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className="flex items-center">
            <div className="text-zinc-400 text-l font-bold h-10 w-10 flex items-center justify-center mr-2">
              {format(day, "EEEEEE")}
            </div>
            {weeks.map((week, weekIndex) => {
              const currentDate = addDays(week, dayIndex);
              const count = getHabitCount(currentDate);
              return (
                <div
                  key={weekIndex}
                  className="h-5 w-4 mr-1 mb-1 rounded-sm hover:outline hover:outline-2 hover:outline-offset-0 hover:outline-blue-700"
                  style={{ backgroundColor: getColor(count) }}
                  onClick={() => openPopover(currentDate)} // Handle click to set the selected date
                ></div>
              );
            })}
          </div>
        ))}
      </div>
      {selectedDate && (
        <HabitDay date={selectedDate} onClose={() => setSelectedDate(null)} />
      )}
    </>
  );
}
