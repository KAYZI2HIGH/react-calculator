import React from "react"
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

const Heading = () => {
  return (
    <div className="w-full flex justify-between align-middle">
      <Typography
        variant="h1"
        className="text-lg dark:text-text-white font-semibold tracking-widest"
      >
        Calc
      </Typography>
      <Switch onChange={() => {
        document.querySelector('body').classList.toggle('dark')
      }}/>
    </div>
  );
};

export default Heading;
