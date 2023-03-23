import useInput from "../hooks/use-input";

const SomeForm = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValueValid: isNameInvalid,
    inputChangeHandler: nameInputChangeHandler,
    inputLostFocusHandler:  nameInputLostFocusHandler,
    setWasTouched: setNameInputTouched,
    resetInput: resetNameInput,
    classes: nameClasses
  } = useInput(name => name.trim() !== "");

  const {
    value: enteredSurname,
    hasError: surnameInputHasError,
    isValueValid: isSurnameInvalid,
    inputChangeHandler: surnameInputChangeHandler,
    inputLostFocusHandler:  surnameInputLostFocusHandler,
    setWasTouched: setSurnameInputTouched,
    resetInput: resetSurnameInput,
    classes: surnameClasses
  } = useInput(surname => surname.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValueValid: isEmailInvalid,
    inputChangeHandler: emailInputChangeHandler,
    inputLostFocusHandler: emailInputLostFocusHandler,
    setWasTouched: setEmailInputTouched,
    resetInput: resetEmailInput,
    classes: emailClasses
  } = useInput(email => email.includes("@"));

  let isFormValid = isNameInvalid && isSurnameInvalid && isEmailInvalid;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      setNameInputTouched();
      setEmailInputTouched();
      setSurnameInputTouched();
      return;

    }
    console.log("Name: " + enteredName);
    console.log("Surname: " + enteredSurname);
    console.log("Email: " + enteredEmail);
    resetNameInput();
    resetSurnameInput();
    resetEmailInput();

  };



  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameClasses}>
          <label htmlFor="name">Enter the name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputLostFocusHandler}
            value={enteredName}
          />
          {nameInputHasError && <p className="error-text">Name is required</p>}
        </div>
        <div className={surnameClasses}>
          <label htmlFor="name">Enter the Surname</label>
          <input
            type="text"
            id="surname"
            onChange={surnameInputChangeHandler}
            onBlur={surnameInputLostFocusHandler}
            value={enteredSurname}
          />
          {surnameInputHasError && <p className="error-text">Surname is required</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">Enter the email</label>
        <input
          type="text"
          id="name"
          onChange={emailInputChangeHandler}
          onBlur={emailInputLostFocusHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Email is required</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Send</button>
      </div>
    </form>
  );
};

export default SomeForm;
