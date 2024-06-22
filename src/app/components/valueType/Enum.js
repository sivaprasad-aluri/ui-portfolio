"use client";
import { TextField } from "@mui/material";
import React, { useState } from "react";

const Enum = ({ inputValue = "", handelValueChange }) => {
  const [enumValue, setEnumValue] = useState(inputValue);

  return (
    <TextField
      variant="outlined"
      sx={{ width: "45%" }}
      placeholder="Enum"
      value={enumValue}
      onChange={(e) => {
        setEnumValue(e.target.value);
        handelValueChange(e.target.value);
      }}
    />
  );
};

export default Enum;
