import React, { useState } from 'react'

function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const {label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true)
  }
  return (
    <div>
        <label className="font-medium">{label}</label>
        <input 
        className={`flex w-full focus:outline-none border-2 mt-2 p-2 focus:border-blue-700 ${focused ? "invalid:border-red-500" : "" }`} 
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name==="confirmPassword" && setFocused(true)}
          focused={focused.toString()}
        />
        <span className={`text-sm text-red-500 errorMessage hidden`}>{errorMessage}</span>
    </div>
  )
}

export default FormInput
   