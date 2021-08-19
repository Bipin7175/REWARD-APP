import React from "react";
import "./styles.css";
import { myData, calReward } from "./myData";

export default function App() {
  let eachMonth = (cust, month) =>
  myData[cust][month].reduce((total, each) => calReward(each) + total, 0);

  let total = cust =>
    Object.values(myData[cust])
      .flat()
      .reduce((total, each) => calReward(each) + total, 0);

  let totalRecord = cust => {
    return <h4>Total&nbsp;{total(cust)}</h4>;
  };

  let innerRecord = cust => {
    return Object.keys(myData[cust]).map(month => {
      return (
        <>
          <h4>
            {month}&nbsp;{eachMonth(cust, month)}
          </h4>
        </>
      );
    });
  };

  let record = Object.keys(myData).map(cust => {
    let inner = innerRecord(cust);
    let total = totalRecord(cust);
    return (
      <>
        <h2>{cust}</h2>
        <div>{inner}</div>
        <div>{total}</div>
      </>
    );
  });

  return (
    <div className="App">
      <h2>Record of Every Transaction during a three month period</h2>
      {record}
    </div>
  );
}