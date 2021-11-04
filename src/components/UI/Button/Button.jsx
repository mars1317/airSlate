import classes from './Button.module.scss';

function Button({buttonValue, filled}) {
  const classList = [classes.Button];
  
  if(filled) {
    classList.push(classes.Filled)
  }
  
  return(
    <button 
    className={classList.join(' ')} 
    type="button" 
    name={buttonValue}
    >
      {buttonValue}
    </button>
  )
}

export default Button;