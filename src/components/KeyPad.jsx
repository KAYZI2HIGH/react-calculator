import React from "react";
import { useState } from "react";
import Keys from "./keys"
import { uid } from "uid";
import Button from "@mui/material/Button";

const KeyPad = ({ setInputValue }) => {
  const [keys, setKeys] = useState([
    {
      id: uid(),
      key1: "7",
      key2: "8",
      key3: "9",
      key4: "DEL",
      lastStyle: true,
    },
    {
      id: uid(),
      key1: "4",
      key2: "5",
      key3: "6",
      key4: "+",
      value: "+",
    },
    {
      id: uid(),
      key1: "1",
      key2: "2",
      key3: "3",
      key4: "-",
      value: "-",
    },
    {
      id: uid(),
      key1: ".",
      key2: "0",
      key3: "/",
      key4: "x",
      value: "*",
    },
  ]);

  return (
    <div className="rounded-lg p-4 bg-keypad-gray dark:bg-keypad-blue space-y-3">
      {keys.map((num) => (
        <Keys
          key={num.id}
          num={num}
          setInputValue={setInputValue}
        />
      ))}
      <div className="flex space-x-3">
        <Button
          variant="contained"
          onClick={() => {
            setInputValue('')
          }}
          className="w-full font-bold bg-key-cyan dark:bg-key-blue"
        >
          RESET
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setInputValue((prev) => `${eval(prev)}`);
          }}
          className="w-full font-bold bg-orange-500 dark:bg-red-400"
        >
          =
        </Button>
      </div>
    </div>
  );
};

export default KeyPad;
