"use client";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SimpleValue from "./SimpleValue";
import Pattern from "./Pattern";
import Enum from "./Enum";
import { getStoredData, setStoreData } from "@/app/helper";

const ValueType = () => {
  const typeOptions = ["simple value", "pattern", "enum"];
  const getData = getStoredData("userInfo");
  const [type, setType] = useState(getData?.type ?? typeOptions[0]);
  const [simpleValue, setSimpleValue] = useState(getData?.simpleValue ?? "");
  const [pattern, setPattern] = useState(getData?.pattern ?? "");
  const [enumValue, setEnumValue] = useState(getData?.enumValue ?? "");

  const [userInfoData] = useState({
    type: "",
    simpleValue: "",
    pattern: "",
    enumValue: "",
  });

  const handelType = (newValue) => {
    setType(newValue);
    setStoreData(
      JSON.stringify({
        ...userInfoData,
        type: newValue,
        simpleValue: simpleValue,
        pattern: pattern,
        enumValue: enumValue,
      })
    );
  };

  const handelSimpleValue = (newValue) => {
    setSimpleValue(newValue);
    setStoreData(
      JSON.stringify({
        ...userInfoData,
        simpleValue: newValue,
      })
    );
  };

  const handelPatternValue = (newValue) => {
    setPattern(newValue);
    setStoreData(
      JSON.stringify({
        ...userInfoData,
        pattern: newValue,
      })
    );
  };

  const handeEnumValue = (newValue) => {
    setEnumValue(newValue);
    setStoreData(
      JSON.stringify({
        ...userInfoData,
        enumValue: newValue,
      })
    );
  };

  useEffect(() => {
    const data = getStoredData("userInfo");
    console.log("data", data);
    if (!!data) {
      setType(data.type);
      setSimpleValue(data.simpleValue);
      setPattern(data.pattern);
      setEnumValue(data.enumValue);
    }
  }, []);

  useEffect(() => {
    setStoreData(
      JSON.stringify({
        type: type,
        simpleValue: simpleValue,
        pattern: pattern,
        enumValue: enumValue,
      })
    );
  }, [type, simpleValue, pattern, enumValue]);

  const handleTypeComponents = (newType) => {
    switch (newType) {
      case "simple value":
        return (
          <SimpleValue
            inputValue={simpleValue}
            handelValueChange={handelSimpleValue}
          />
        );

      case "pattern":
        return (
          <Pattern
            inputValue={pattern}
            handelValueChange={handelPatternValue}
          />
        );

      case "enum":
        return (
          <Enum inputValue={enumValue} handelValueChange={handeEnumValue} />
        );
    }
  };

  console.log("type", type);
  console.log("handleTypeComponents", handleTypeComponents(type), simpleValue);

  return (
    <Box sx={{ width: "1024px", margin: "auto" }}>
      <Typography variant="h4" my={2}>
        Value Type
      </Typography>
      <Box>
        <FormControl
          sx={{
            display: "flex",
            width: "1000px",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            onChange={(e) => handelType(e.target.value)}
            sx={{ width: "45%" }}
          >
            {typeOptions.map((val) => (
              <MenuItem value={val} key={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
          {handleTypeComponents(type)}
        </FormControl>
      </Box>
    </Box>
  );
};

export default ValueType;
