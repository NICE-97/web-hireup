import React, { useState } from 'react'
import blogs from '../../data/blogs'

// Motion Control
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

function PostBlog({ id }) {
  const [data, setData] = useState(blogs[id-1]);
  return (
    <section className='container max-w-full'>
            <motion.div 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0}}
            
            className='max-w-7xl mx-auto px-10 py-20'>
                <div className='inline-block bg-gray-100 px-4 py-2 rounded-sm'>
                    <div className='flex gap-2 font-medium'>
                        <h4 className='text-md bg-white px-2 py-1 text-blue-700 content-center'>NEW</h4>
                        <p className='content-center'>{data.date}</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-[70%_30%]'> 
                    <div className='grid gap-5 mt-10'>
                        <h1 className='text-4xl font-bold'>{data.info}</h1>
                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non mauris tincidunt, porttitor sapien et, fringilla ligula. Etiam vel ligula enim. Sed neque lorem, maximus et sapien vitae.</p>
                    </div>
                </div>
                <div className='mt-10'>
                    <img className='w-full' src={data.image} alt={data.id} />
                </div>
            </motion.div>
     </section>
  )
}

export default PostBlog
