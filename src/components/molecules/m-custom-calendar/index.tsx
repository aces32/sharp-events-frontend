/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { format, addDays, startOfWeek, isBefore, startOfDay } from 'date-fns';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface CustomCalendarProps {
  setValue: (name: string, value: any) => void;
  name: string;
}
export default function CustomCalendar({ setValue, name }: CustomCalendarProps) {
  const today = startOfDay(new Date());
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(
    startOfWeek(today, { weekStartsOn: 0 }),
  );
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const weekDays: Date[] = Array.from({ length: 7 }, (_, i) => addDays(currentWeekStart, i));

  const changeWeek = (days: number) => {
    setCurrentWeekStart(addDays(currentWeekStart, days));
  };
  const handleDateClick = (date: Date) => {
    if (isBefore(date, today)) {
      return;
    }
    setSelectedDate(date);
    setValue(name, format(date, 'yyyy-MM-dd'));
  };

  return (
    <div className="relative mx-auto max-w-sm md:px-0 ">
      <button
        type="button"
        onClick={() => changeWeek(-7)}
        className=" absolute -left-5 top-[40%] z-40 rounded-full border-[1.5px] border-[#292D32] p-2 transition-all hover:border-primaryText hover:bg-primaryText md:-left-8"
      >
        <FaChevronLeft size={10} className="hover:text-white" />
      </button>

      <button
        type="button"
        onClick={() => changeWeek(7)}
        className=" absolute   -right-5  top-[40%] z-40 rounded-full border-[1.5px] border-[#292D32] p-2 transition-all hover:border-primaryText hover:bg-primaryText md:-right-8"
      >
        <FaChevronRight size={10} className="hover:text-white" />
      </button>

      <div className="flex justify-between space-x-0.5 bg-white sm:space-x-1 ">
        {weekDays.map((day) => {
          const isPast = isBefore(day, today);
          return (
            <button
              type="button"
              onClick={() => handleDateClick(day)}
              key={day.toString()}
              disabled={isPast}
              className={`flex  w-10 cursor-pointer flex-col items-center rounded-[7px] border px-3 py-2 font-Rubik text-[11px] font-bold leading-normal tracking-normal transition-all xl:w-16 ${
                isPast
                  ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                  : selectedDate.toDateString() === day.toDateString()
                  ? 'bg-primaryText  text-white '
                  : 'bg-white text-black hover:bg-gray-300 '
              }`}
              style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
            >
              <span className="text-sm font-medium">{format(day, 'EEE')}</span>
              <span className="text-lg font-bold">{format(day, 'd')}</span>
              <span className="text-xs">{format(day, 'MMM')}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
