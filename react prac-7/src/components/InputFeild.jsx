import React from 'react'

export default function InputFeild({labelFor, labelValue, inputId, inputName, InputValue, InputHandler, errorMasseg }) {
  return (
    <div id='input' className="input-container">
        <label htmlFor={labelFor}>{labelValue}</label>
        <input
          id={inputId}
          name={inputName}
          value={InputValue}
          onChange={InputHandler}
        />
        <div id='error-message'><p>{errorMasseg}</p></div>
    </div>
  )
}
