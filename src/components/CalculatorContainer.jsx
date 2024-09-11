import React, { useState } from "react";
import Header from "./header.jsx";
import InputField from "./inputField.jsx";
import KeyPad from "./KeyPad.jsx";
import Typography from '@mui/material/Typography'

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="w-full max-w-sm my-auto space-y-2 p-2">
      <Header />
      <InputField inputValue={inputValue} />
      <KeyPad
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <div>
        <Typography
          variant="h3"
          color="initial"
          className=" mt-5 text-nm font-semibold w-min mx-auto text-text-blue dark:text-text-white"
        >
          @KAYZI.2HIGH
        </Typography>
      </div>
    </section>
  );
};

export default Calculator;
