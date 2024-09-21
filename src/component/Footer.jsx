import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

function Footer() {
  return (
    <footer className='container max-w-full'>
            <div className='max-w-7xl mx-auto px-10 py-20'>
                <div className='flex'>
                    <div className='content-center text-2xl text-blue-700'>
                    <FaArrowRight />
                    </div>
                    <div className='text-4xl font-medium content-center'>
                    HireUp
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        <div>
                            <h1 className='uppercase font-bold text-gray-500'>pages</h1>
                            <ul className='grid gap-4 font-semibold mt-5'>
                                <li className='hover:text-blue-700'><a href="">Home</a></li>
                                <li className='hover:text-blue-700'><a href="">Home V2</a></li>
                                <li className='hover:text-blue-700'><a href="">About</a></li>
                                <li className='hover:text-blue-700'><a href="">Pricing</a></li>
                                <li className='hover:text-blue-700'><a href="">Jobs</a></li>
                                <li className='hover:text-blue-700'><a href="">Post a Job</a></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='uppercase font-bold text-gray-500'>account</h1>
                            <ul className='grid gap-4 font-semibold mt-5'>
                                <li className='hover:text-blue-700'><a href="">Sign In</a></li>
                                <li className='hover:text-blue-700'><a href="">Sign Up</a></li>
                                <li className='hover:text-blue-700'><a href="">Reset Password</a></li>
                                <li className='hover:text-blue-700'><a href="">User Account</a></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='uppercase font-bold text-gray-500'>template</h1>
                            <ul className='grid gap-4 font-semibold mt-5'>
                                <li className='hover:text-blue-700'><a href="">Style Guide</a></li>
                                <li className='hover:text-blue-700'><a href="">License</a></li>
                                <li className='hover:text-blue-700'><a href="">Changelog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-10 lg:pl-10 xl:pl-20'>
                        <div>
                            <h1 className='uppercase font-bold text-gray-500'>Sign up to our newsletter</h1>
                            <div className='flex gap-5 mt-5'>
                                <div className='w-full'>
                                    <input className='border-2 focus:outline-blue-500 w-full px-5 py-3' type="text" placeholder='Email address' />
                                </div>
                                <div className='w-40 px-3 content-center py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-center transition duration-300 ease-in-out'>
                                    <button>Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='my-10'/>
                <div className='grid gap-5 md:flex md:justify-between text-xl font-semibold'>
                    <div className='grid grid-rows-4 justify-items-center md:flex gap-2 md:justify-center'>
                        <span className='content-center'>Copyright</span>
                        <div className='grid content-center'>
                            <FaCopyright />
                        </div>
                        <span className='content-center'>2024  By - Patthanawong Sangpan</span>
                        <div className='grid content-center transition-all hover:scale-125'>
                            <a href="https://github.com/NICE-97" target='_blank'><FaGithub /></a>
                        </div>
                    </div>
                    <div className='flex gap-5 text-4xl justify-center'>
                        <a className='hover:text-blue-700' href="" target="_blank" rel="noopener noreferrer"><CiTwitter/></a>
                        <a className='hover:text-blue-700' href="" target="_blank" rel="noopener noreferrer"><CiInstagram/></a>
                        <a className='hover:text-blue-700' href="" target="_blank" rel="noopener noreferrer"><CiFacebook/></a>
                    </div>
                </div>
            </div>
    </footer>
  )
}

export default Footer
