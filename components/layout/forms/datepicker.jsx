import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerCustom = ({ formik, name , value , placeholder}) => {
  const [startDate, setStartDate] = useState("");
  const years = [];

  for (let i = 1920; i < new Date().getFullYear() + 2; i++) {
    years.push(i);
  }
 
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select
            value={date.getFullYear()}
            // selected={setStartDate}
            // value={startDate || startDate !== "" ? startDate?.getFullYear() : ""}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* MONTH SELECT */}
          <select
            value={months[date.getMonth()]}
            // value={months[date]}
            // value={
            //   startDate || startDate !== "" ? months[startDate?.getMonth()] : ""
            // }
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
      className="form-control  eforms_input_container"
      selected={startDate}
      name={name}
      onBlur={formik.handleBlur}
      value={value}
      placeholderText={ placeholder ? placeholder : "mm/dd/yyyy"}
      onChange={(date) => {
        setStartDate(date);
        formik.setFieldValue(name, date);
      }}
    />
  );
};

export default DatePickerCustom;
