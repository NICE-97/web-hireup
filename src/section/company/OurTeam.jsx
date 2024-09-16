import React from 'react'

// Motion Control
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

function OurTeam() {
  return (
    <section className='container max-w-full'>
            <div className='max-w-7xl mx-auto px-10 py-20 grid justify-items-center gap-5'>
                <motion.div 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0}}
                
                className='text-center w-4/5 md:w-3/5 lg:w-2/5 grid gap-5'>
                    <h3 className='uppercase font-semibold text-blue-700'>about hireup</h3>
                    <h1 className='text-4xl font-bold'>Our Team</h1>
                    <p className='text-xl text-gray-700 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus pharetra cursus. Suspendisse sodales porta leo, ac placerat ex pretium quis.</p>
                </motion.div>
                <motion.div 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0}}
                
                className='grid grid-cols-[40%_60%] gap-5 mt-10'>
                    <div className='grid gap-5'>
                        <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b1fdeb442ab_About%20Page%20Image%20(6).webp" alt="" />
                        <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b307ab442a7_About%20Page%20Image%20(5).webp" alt="" />
                    </div>
                    <div>
                        <img className='h-full object-cover' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b2818b442aa_About%20Page%20Image%20(1).webp" alt="" />
                    </div>
                </motion.div>
                <motion.div 
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0}}
                
                className='grid grid-cols-2 gap-5'>
                    <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b18b1b442b0_About%20Page%20Image%20(7).webp" alt="" />
                    <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b2ba9b442b1_About%20Page%20Image%20(8).webp" alt="" />
                </motion.div>
            </div>
    </section>
  )
}

export default OurTeam
