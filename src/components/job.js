import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from "react-intl";

const Job = (props) => {
  const language = (navigator && navigator.language.split(/[-_]/)[0]) || "en";

  const formatSalary = (salary) => {
    if (language === "es") {
      return salary === 1 ? "millón" : "millones";
    } 
    else {
      return "million";
    }
  };

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
        {props.offer.salary}{" "}
        <FormattedMessage
          id={formatSalary(props.offer.salary)}
        />
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={props.offer.views} />
      </td>
    </tr>
  );
};

export default Job;
