import {useRef, useState} from "react";

const SomeInput = (props) => {

  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [isEnteredNameValid, setIsEnteredNameValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setIsEnteredNameValid(false);
      setIsTouched(true);
      return;
    }

    setIsEnteredNameValid(true);

    console.log(enteredName);
    setEnteredName("");
  }

  const showWarning = isTouched && !isEnteredNameValid;
  const nameInputClasses = showWarning ? "form-control invalid" : "form-control"

  const validateInput = () => {
    setIsEnteredNameValid(enteredName.trim() !== "");
  }

  const nameInputLostFocusHandler = () => {
    setIsTouched(true);
    validateInput();
  }

  const nameInputOnFocusHandler = () => {
    setIsTouched(false)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Enter the name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputLostFocusHandler}
          onFocus={nameInputOnFocusHandler}
          value={enteredName}/>
        {showWarning && <p className="error-text">Enter the name</p>}
      </div>
      <div className="form-actions">
        <button>Send</button>
      </div>
    </form>
  );
};

export default SomeInput;
