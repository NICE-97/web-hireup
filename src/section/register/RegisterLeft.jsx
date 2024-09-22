import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../../component/FormInput'
import { pattern } from 'framer-motion/client';

function RegisterLeft() {
  const [values, setValues] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    checkbox: '',
  });

  const registerInput = [
    {
        id:1,
        name:'email',
        type:'email',
        placeholder:'Email',
        label:'Email',
        errorMessage:"It should be a valid email address!",
        required: true,
    },
    {
        id:2,
        name:'name',
        type:'text',
        placeholder:'Name',
        label:'Name',
        errorMessage:"Name should be 3-16 character and shouldn't include any special character!",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
    },
    {
        id:3,
        name:'password',
        type:'password',
        placeholder:'Password',
        label:'Password',
        errorMessage:"Password should be 8-20 character and include at least 1 letter, 1 number and 1 special character!",
        pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
        required: true,
    },
    {
        id:4,
        name:'confirmPassword',
        type:'password',
        placeholder:'Confirm Password',
        label:'Confirm Password',
        errorMessage:"Passwords don't match!",
        pattern: values.password,
        required: true,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values)

  return (
    <div className="px-10 my-10 content-center">
      <div className="grid gap-5 content-between h-full">
        <div>
          <h2 className="text-4xl font-bold">Sing up</h2>
          <p className="text-2xl text-gray-700 mt-10">
            Get started posting and applying for jobs
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="grid gap-5 mt-10">
            {registerInput.map((input) => {
              return(
                <FormInput 
                  key={input.id} 
                  {...input} 
                  value={values[input.name]} 
                  onChange={onChange}
                />
              )
            })}
            <div className="grid grid-cols-[5%_95%] gap-3 mt-5">
              <input className="w-6 h-6" type="checkbox" />
              <div>I consent to receive marketing emails.</div>
            </div>
            <div className="grid grid-cols-[5%_95%] gap-3 ">
              <input className="w-6 h-6" type="checkbox"/>
              <div>By creating an account, I agree to this website's <a href='/' className='text-blue-700'>privacy policy</a> and <a href='/' className='text-blue-700'>terms of service</a></div>
            </div>
            <button className="flex justify-center bg-blue-700 hover:bg-blue-800 text-white py-3 font-semibold transition duration-300 ease-in-out">
              Create an account
            </button>
          </form>
        </div>
        <div>
          <hr className="mt-5" />
          <div className="flex gap-2 text-xl mt-5 text-gray-700">
            <div>Already have an account?</div>
            <Link className="text-blue-700" to="/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterLeft
