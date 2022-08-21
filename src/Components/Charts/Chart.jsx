import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const maxDatapointVlaue = props.dataPoints.map(dataPoint => dataPoint.value)
  const maxValue = Math.max(...maxDatapointVlaue)

  return (
    <>
      <div className="chart">
        {props.dataPoints.map(datapoint => (
            <ChartBar
                value = {datapoint.value}
                maxValue = {maxValue}
                label = {datapoint.label}
            />
        ))}
      </div>
    </>
  );
};

export default Chart;
