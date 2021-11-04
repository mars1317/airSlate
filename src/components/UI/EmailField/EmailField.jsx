import classes from './EmailField.module.scss';
import {useState, useRef, useEffect} from 'react';
import validateEmail from '../../../assets/helpers/validateEmail';

function EmailField() {
  const [copySuccess, setCopySuccess] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const emailInputElement = useRef(null);

  useEffect(()=> {
    emailInputElement.current.focus();
  })

  const handleOnChange = (emailField) => {
    validateEmail(emailField.target.value) ? setDisabled(false) : setDisabled(true);
  }

  const copyToClipboard = (event) => {
    event.preventDefault();
    if(!isDisabled) {
      setCopySuccess(true);
    
      setTimeout(() => {
        setCopySuccess(false)
      }, 1500);
    }
  };

  return (
      <form className={classes.Form} onSubmit={copyToClipboard} action="#" method="post" enctype="multipart/form-data">
        <label htmlFor="emailField">
          <input 
            id="emailField"
            type="text"           
            ref={emailInputElement}
            className={classes.EmailField}
            onChange={handleOnChange}
            aria-labelledby="copyEmailFieldID"
            placeholder="D+10964978@pdffiller.com"
            required
            aria-required="true"
          />
        </label>
        <button 
          id="copyEmailFieldID"
          name="copyEmailField"
          aria-label="copy email field"
          disabled={isDisabled}
          className={classes.CopyFieldBtn}
        />
       {copySuccess ? <span className={classes.CheckMark}>Copied!</span> : null}
      </form>
  );
}

export default EmailField;