import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Keys = ({ num, setInputValue }) => {
  const handleKeyClick = (no) => {
    setInputValue((prev) => prev + no);
  };
  
  const handleDelete = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  return (
    <div className="grid grid-cols-4 gap-3">
      
      <Button
        variant="contained"
        color="default"
        onClick={() => {
          handleKeyClick(num.key1);
        }}
        className="bg-key-orange hover:bg-white"
      >
        <Typography
          variant="h6"
          color="initial"
          size="small"
        >
          {num.key1}
        </Typography>
      </Button>
      
      <Button
        variant="contained"
        color="default"
        onClick={() => {
          handleKeyClick(num.key2);
        }}
        className="bg-key-orange hover:bg-white"
      >
        <Typography
          variant="h6"
          color="initial"
          size="small"
        >
          {num.key2}
        </Typography>
      </Button>
      
      <Button
        variant="contained"
        color="default"
        className="bg-key-orange hover:bg-white"
        onClick={() => {
          handleKeyClick(num.key3);
        }}
      >
        <Typography
          variant="h6"
          color="initial"
          size="small"
        >
          {num.key3}
        </Typography>
      </Button>
      
      <Button
        variant="contained"
        className={
          num.lastStyle
            ? "bg-key-cyan hover:bg-opacity-80 dark:bg-key-blue"
            : "bg-key-orange hover:bg-white"
        }
        onClick={() => {
          num.lastStyle ? handleDelete() : handleKeyClick(num.value);
        }}
      >
        <Typography
          variant="h6"
          color={num.lastStyle ? "white" : "initial"}
          size="small"
          className="text-sm font-semibold"
        >
          {num.key4}
        </Typography>
      </Button>
      
    </div>
  );
};

export default Keys;
