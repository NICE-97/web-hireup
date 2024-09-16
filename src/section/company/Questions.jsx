import React, { useState } from 'react'

import askQuestions from '../../data/askQuestions';
import SingleQuestions from '../../component/SingleQuestions';

// Motion Control
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

function Questions() {
  const [ Questions, setQuestions ] = useState(askQuestions)
  return (
    <section className='container max-w-full bg-zinc-100'>
            <div className='max-w-7xl mx-auto px-10 py-20 grid justify-items-center gap-5'>
                <motion.div 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0}}
                
                className='text-center w-4/5 md:w-3/5 lg:w-2/5 grid gap-5'>
                    <h3 className='uppercase font-semibold text-blue-700'>about hireup</h3>
                    <h1 className='text-4xl font-bold'>Frequently asked questions</h1>
                </motion.div>
                <motion.div 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0}}
                
                className='w-4/5 grid gap-5 mt-10'>
                    {Questions.map((item, index) => {
                        return(
                            <SingleQuestions key={`${index}-${item.title}`}  {...item}/>
                        )
                    })}
                </motion.div>
            </div>
    </section>
  )
}

export default Questions
