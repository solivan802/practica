import React from 'react'
//CSS
import './FormInput.css'

const FormInput = (props) => {
  const {test, placeholder, errorMassage, isValid,id, onBlur, pattern, inputRef, value, label, ...inputProps} = props;

  return (
    <div className='formInput'>
      <label>{label}</label>
      <input 
      {...inputProps}
      onBlur={onBlur}
      pattern={pattern}
      ref={inputRef}
      placeholder={placeholder} required/>
      {value.isValid && <span>{errorMassage}</span>}
    </div>
  )
}

export default FormInput