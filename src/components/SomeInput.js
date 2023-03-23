import {useState} from "react";

const SomeInput = (props) => {

  const [enteredName, setEnteredName] = useState("");
  const [wasNameInputTouched, setWasNameInputTouched] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== "";
  const isNameInputValid = !isEnteredNameValid && wasNameInputTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isEnteredNameValid) {
      setWasNameInputTouched(true);
      return;
    }

    console.log(enteredName);
    setEnteredName("");
    setWasNameInputTouched(false);
  };

  const nameInputLostFocusHandler = () => {
    setWasNameInputTouched(true);
  }

  const nameInputClasses = isNameInputValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Enter the name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputLostFocusHandler}
          value={enteredName}/>
        {isNameInputValid && <p className="error-text">Enter the name</p>}
      </div>
      <div className="form-actions">
        <button>Send</button>
      </div>
    </form>
  );
};

export default SomeInput;
