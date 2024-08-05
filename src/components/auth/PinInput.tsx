import React, { useRef, useEffect, useState } from "react";
import { PinCompletion } from "@/types";
import { type } from "os";

type PinInputType = {
  onComplete: PinCompletion;
  initialPin: string;
}
function createInputRefs() {
  return Array.from({ length: 6 }, () => useRef<HTMLInputElement | null>(null));
}
const PinInput: React.FC<PinInputType> = ({onComplete,initialPin}) => {
  useEffect(() => {}, [initialPin]);
  const inputRefs = createInputRefs();

  const [pinValues, setPinValues] = useState<string[]>(initialPin.split(""));

  const handleChange = (index: number, value: string) => {
    if (value.match(/^\d$/) || value === "") {
      const newPin = [...pinValues];
      newPin[index] = value;
      setPinValues(newPin); // Update the pinValues state

      onComplete(newPin.join(""));

      if (newPin.every((digit) => digit !== "")) {
        // You might want to perform some action here as well
      } else if (value !== "") {
        if (index < inputRefs.length - 1) {
          inputRefs[index + 1]?.current?.focus();
        }
      }
    }
  };

  return (
    <div className="flex">
      {pinValues.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Backspace" && digit === "" && index > 0) {
              inputRefs[index - 1]?.current?.focus();
            }
          }}
          ref={inputRefs[index]}
          className="w-11 h-11 text-center text-xl mx-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-orange-600 focus:border-orange-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
        />
      ))}
    </div>
  );
};

export default PinInput;
