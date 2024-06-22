"use client";
import { TextField } from "@mui/material";
import React, { useState } from "react";

const SimpleValue = ({ inputValue = "", handelValueChange }) => {
  const [simpleValue, setSimpleValue] = useState(inputValue);

  return (
    <TextField
      variant="outlined"
      sx={{ width: "45%" }}
      placeholder="simple value"
      value={simpleValue}
      onChange={(e) => {
        setSimpleValue(e.target.value);
        handelValueChange(e.target.value);
      }}
    />
  );
};

export default SimpleValue;
