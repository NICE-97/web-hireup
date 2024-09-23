import React, { useState } from 'react'

function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const {label, errorMessage, onChange, id, description, privacy, terms, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true)
  }
  
  return (
    <div>
        <label className="font-medium">{label}</label>
        {id <= 4 ? 
        <input 
        className={`flex w-full focus:outline-none border-2 mt-2 p-2 focus:border-blue-700 ${focused ? "invalid:border-red-500" : "" }`} 
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name==="confirmPassword" && setFocused(true)}
          focused={focused.toString()}
        /> :
        <div className="grid grid-cols-[5%_95%] gap-3 mt-5">
            <input
            {...inputProps}
            onChange={()=>setCheckbox(!checkbox)}
            value={checkbox}
            className="w-6 h-6" type="checkbox"/>
            <div>{description} <a href='/' className='text-blue-700'>{privacy}</a> and <a href='/' className='text-blue-700'>{terms}</a></div>
          </div> }
        <span className={`text-sm text-red-500 errorMessage hidden`}>{errorMessage}</span>
    </div>
  )
}

export default FormInput
   