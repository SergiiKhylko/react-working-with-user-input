import {useState} from "react";

const useInput = validateValueFunc => {
  const [enteredValue, setEnteredValue] = useState("");
  const [wasTouched, setWasTouched] = useState(false);

  const isValueValid = validateValueFunc(enteredValue);
  const isInputInvalid = !isValueValid && wasTouched;

  const inputLostFocusHandler = () => {
    setWasTouched(true);
  }

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  }

  const setTouched = () => {
    setWasTouched(true);
  }

  const resetInput = () => {
    setWasTouched(false);
    setEnteredValue("");
  }

  const classes = isInputInvalid
      ? "form-control invalid"
      : "form-control";


  return {
    value: enteredValue,
    hasError: isInputInvalid,
    classes,
    inputChangeHandler,
    inputLostFocusHandler,
    setTouched,
    resetInput
  }
};

export default useInput;