import React from "react";
import Typography from "@mui/material/Typography";


const InputField = ({ inputValue }) => {
  return (
    <div className="w-full h-[60px] bg-screen-gray dark:bg-screen-blue rounded-lg flex align-middle justify-end p-2">
      <Typography
        variant="p"
        className="text-nm dark:text-white my-auto font-bold  "
      >{inputValue}
      </Typography>
    </div>
  );
};

export default InputField;
