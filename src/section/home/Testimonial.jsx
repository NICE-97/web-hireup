import React, { useState } from 'react';
import iconperson from '../../assets/iconperson.svg';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import presons from '../../data/presons';

function Testimonial() {
  const [ presonId, setPresonId ] = useState(0);
  const presonlength = presons.length;

  function btnPrevious () {
    if (presonId === 0) {
        setPresonId(presonlength-1)
    }else{
        setPresonId(presonId - 1)
    }
  }
  function btnNext () {
    if (presonId === presonlength-1) {
        setPresonId(0)
    }else{
        setPresonId(presonId + 1)
    }
  }

  return (
    <section className='container max-w-full bg-zinc-100'>
                <div className='max-w-7xl mx-auto px-10 py-20'>
                    <div className='grid justify-items-center gap-5'>
                        <h3 className='text-2xl font-semibold text-blue-700'>TESTIMONIAL</h3>
                        <h1 className='text-4xl font-bold'>See what users say about our job platform</h1>
                    </div>
                    <div className='grid gap-5 grid-cols-1 mt-10 '>
                        {presons.map((items, index) => {
                            return(
                                <div key={`${index}-${items.name}`} className={`grid gap-5 grid-cols-1 md:grid-cols-2 ${index === presonId ? '' : 'hidden'}`}>
                                    <div className='grid gap-2 content-between'>
                                        <div>
                                            <div className='border-2 inline-block p-5 bg-white'>
                                                <img src={iconperson} alt="preson" />
                                            </div>
                                        </div>
                                        <div className='grid gap-5'>
                                            <p className='text-3xl font-semibold'>{items.info}</p>
                                            <h3 className='text-lg'><span className='text-blue-700'>{items.name}</span> - {items.position}</h3>
                                        </div>
                                        <div>
                                            <div className='grid justify-start'>
                                                <div className='grid content-end mt-5 md:mt-0'>
                                                    <div className='grid grid-flow-col gap-5 text-xl'>
                                                        <button className='border-solid border-2 bg-white transition duration-300 ease-in-out border-slate-200 p-3 hover:bg-slate-200' onClick={btnPrevious}><FaArrowLeft /></button>
                                                        <button className='border-solid border-2 bg-white transition duration-300 ease-in-out border-slate-200 p-3 hover:bg-slate-200' onClick={btnNext}><FaArrowRight /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center md:justify-end'>
                                        <div className='w-full md:w-5/6'>
                                            <img className='w-full h-120 object-cover' src={items.image} alt="presonman" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
    </section>
  )
}

export default Testimonial
