import {useState} from "react";

const SomeInput = (props) => {

  const [enteredName, setEnteredName] = useState("");
  const [wasNameInputTouched, setWasNameInputTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [wasEmailInputTouched, setWasEmailInputTouched] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== "";
  const isEnteredEmailValid = enteredEmail.includes("@");

  const isNameInputValid = !isEnteredNameValid && wasNameInputTouched;
  const isEmailInputValid = !isEnteredEmailValid && wasEmailInputTouched;

  let isFormValid = isEnteredNameValid && isEnteredEmailValid;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      setWasNameInputTouched(true);
      setWasEmailInputTouched(true);

      return;
    }

    console.log(enteredName);
    setEnteredName("");
    setWasNameInputTouched(false);
  };

  const nameInputLostFocusHandler = () => {
    setWasNameInputTouched(true);
  }

  const emailInputLostFocusHandler = () => {
    setWasEmailInputTouched(true);
  }

  const nameInputClasses = isNameInputValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = isEmailInputValid
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
        {isNameInputValid && <p className="error-text">Name is required</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Enter an email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputLostFocusHandler}
          value={enteredEmail}/>
        {isEmailInputValid && <p className="error-text">Email is required</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Send</button>
      </div>
    </form>
  );
};

export default SomeInput;
