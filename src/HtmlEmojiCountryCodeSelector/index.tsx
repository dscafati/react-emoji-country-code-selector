import React, { SelectHTMLAttributes } from "react";
import data from "../data/dataset.csv";
import { Dataset } from "../types/dataset";

interface propsType extends SelectHTMLAttributes<HTMLSelectElement> {
  generateValue?(data: Dataset): string;
  generateLabel?(data: Dataset): string;
}

export default function HtmlEmojiCountrycodeSelector(props: propsType) {
  function getLabel(row: Dataset) {
    if (props.generateLabel) {
      return props.generateLabel(row);
    } else {
      return (
        <>
          {row.ISO} {row.flag} {row.code}
        </>
      );
    }
  }
  function getValue(row: Dataset) {
    if (props.generateValue) {
      return props.generateValue(row);
    } else {
      return row.code;
    }
  }
  return (
    <select {...props}>
      {props.children}
      {data.map((row: Dataset) => (
        <option key={row.ISO + row.code} value={getValue(row)}>
          {getLabel(row)}
        </option>
      ))}
    </select>
  );
}
