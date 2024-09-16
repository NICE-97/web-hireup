import React from 'react'

// Motion Control
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

function Header() {
  return (
    <section className='container max-w-full'>
        <motion.div 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0}}
        
        className='max-w-7xl mx-auto px-10 py-20 flex justify-center'>
            <div className='md:w-4/6 grid gap-10'>
                <div className='text-center grid gap-5'>
                    <h4 className='text-blue-700 font-medium'>BLOG</h4>
                    <h1 className='text-4xl font-bold'>Get the latest newsabout careers</h1>
                    <p className='text-lg text-gray-700 px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornar.</p>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Header
