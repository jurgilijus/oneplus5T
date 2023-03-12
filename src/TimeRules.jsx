import { Component } from "react";

export default class TimeRules extends Component {
  addZero = (i) => {
    if (i < 10) {
      return "0" + i;
    }
    return i;
  };

  weekDays = ["Sun", "mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "oktober",
    "november",
    "december",
  ];
}
