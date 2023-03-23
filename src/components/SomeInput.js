import useInput from "../hooks/use-input";

const SomeInput = (props) => {

  const {
    value: enteredName,
    hasError: nameInputHasError,
    inputChangeHandler: nameInputChangeHandler,
    inputLostFocusHandler:  nameInputLostFocusHandler,
    setWasTouched: setNameInputTouched,
    resetInput: resetNameInput,
    classes: nameClasses
  } = useInput(name => name.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    inputChangeHandler: emailInputChangeHandler,
    inputLostFocusHandler: emailInputLostFocusHandler,
    setWasTouched: setEmailInputTouched,
    resetInput: resetEmailInput,
    classes: emailClasses
  } = useInput(email => email.includes("@"));

  let isFormValid = !nameInputHasError && !emailInputHasError;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      setNameInputTouched();
      setEmailInputTouched();
      return;
    }

    console.log("Name: " + enteredName);
    console.log("Email: " + enteredEmail);
    resetNameInput();
    resetEmailInput()
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Enter the name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputLostFocusHandler}
          value={enteredName}/>
        {nameInputHasError && <p className="error-text">Name is required</p>}
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">Enter an email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputLostFocusHandler}
          value={enteredEmail}/>
        {emailInputHasError && <p className="error-text">Email is required</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Send</button>
      </div>
    </form>
  );
};

export default SomeInput;
