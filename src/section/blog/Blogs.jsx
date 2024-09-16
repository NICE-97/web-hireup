import React from 'react'
import blogs from '../../data/blogs'
import SingleBlog from '../../component/SingleBlog'

// Motion Control
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

function Blogs() {
  return (
    <section className='container max-w-full'>
        <div className='max-w-7xl mx-auto px-10 py-20'>
            <motion.div 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0}}
            
            className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {blogs.map((item, index) => {
                    return(
                        <SingleBlog key={`${index}-${item.title}`} {...item}/>
                    )
                })}
                </motion.div>
        </div>
    </section>
  )
}

export default Blogs
