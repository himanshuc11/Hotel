import React from 'react';
import { addDays } from 'date-fns';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRange } from 'react-date-range';

function Calendar({ disabledDates, datesOnCalendar, setDatesOnCalendar }) {
  return (
    <DateRange
      onChange={item => setDatesOnCalendar([item.selection])}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      months={1}
      ranges={datesOnCalendar}
      direction="horizontal"
      disabledDates={disabledDates}
    />
  );
}

export default Calendar;
