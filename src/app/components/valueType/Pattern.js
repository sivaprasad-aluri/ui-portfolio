"use client";
import { TextField } from "@mui/material";
import React, { useState } from "react";

const Pattern = ({ inputValue = "", handelValueChange }) => {
  const [pattern, setPattern] = useState(inputValue);

  return (
    <TextField
      variant="outlined"
      sx={{ width: "45%" }}
      placeholder="pattern"
      value={pattern}
      onChange={(e) => {
        setPattern(e.target.value);
        handelValueChange(e.target.value);
      }}
    />
  );
};

export default Pattern;
