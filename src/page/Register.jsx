import React from 'react'
import RegisterLeft from '../section/register/RegisterLeft'
import RegisterRight from '../section/register/RegisterRight'

function Register() {
  return (
    <section className="container max-w-full md:h-screen90 grid md:grid-cols-2">
      <div className="flex justify-end">
        <div className="max-w-2xl content-center w-full">
            <RegisterLeft/>
        </div>
      </div>
      <div className="bg-blue-700 hidden md:flex">
        <div className="max-w-2xl content-center w-full">
            <RegisterRight/>
        </div>
      </div>
    </section>
  )
}

export default Register
