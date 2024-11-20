import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './SetOpeningHours.css';

const SetOpeningHours = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [closedDays, setClosedDays] = useState({});

  const toggleClosed = (day) => {
    setClosedDays((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  return (
    <div>
      <h2>Set Opening Hours</h2>
      <hr />
      <form>
        {days.map((day) => (
          <div className="day" key={day}>
            <h2>{day}</h2>
            <FormControlLabel
              control={
                <Checkbox
                  checked={closedDays[day] || false}
                  onChange={() => toggleClosed(day)}
                />
              }
              label="Closed"
            />
            {!closedDays[day] && (
              <>
                <FormControl variant="outlined" className="form-field">
                  <InputLabel>Opens at:</InputLabel>
                  <Select label="Opens at">
                    <MenuItem value="00.00">00.00</MenuItem>
                    <MenuItem value="01.00">01.00</MenuItem>
                    <MenuItem value="02.00">02.00</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className="form-field">
                  <InputLabel>Closes at:</InputLabel>
                  <Select label="Closes at">
                    <MenuItem value="00.00">00.00</MenuItem>
                    <MenuItem value="01.00">01.00</MenuItem>
                    <MenuItem value="02.00">02.00</MenuItem>
                  </Select>
                </FormControl>
              </>
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default SetOpeningHours;
