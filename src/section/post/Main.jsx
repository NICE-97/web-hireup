import React from 'react'

// Motion Control
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'


function Main() {
  return (
    <section className='container max-w-full'>
        <motion.div 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0}}

        className='max-w-7xl mx-auto px-10 py-20 grid gap-10 text-lg'>
            <div className='grid gap-5'>
                <h1 className='text-4xl font-bold'>Build a job board today</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex odio, pharetra non ullamcorper nec, elementum non ipsum. Etiam a vestibulum est, eget bibendum eros. Nam suscipit leo vitae tincidunt luctus.</p>
                <p>Sed vestibulum eu lacus sit amet rutrum. In pulvinar, nulla non venenatis lobortis, turpis ex aliquam risus, a iaculis nisi metus a leo. Ut aliquet nulla velit, eu cursus justo faucibus efficitur. Nam tempus, lorem ac interdum ultricies, diam est bibendum orci, sit amet feugiat dui libero id elit. Maecenas pellentesque vitae nisi vel eleifend.</p>
            </div>
            <div className='px-4 py-3 bg-blue-200 text-blue-700'>
                Phasellus consequat felis ut sem dignissim, ut mattis nisl fringilla.
            </div>
            <div className='grid gap-5'>
                <h1 className='text-4xl font-bold'>New API endpoints</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex odio, pharetra non ullamcorper nec, elementum non ipsum. Etiam a vestibulum est, eget bibendum eros.</p>
                <p>Nam suscipit leo vitae tincidunt luctus. Sed vestibulum eu lacus sit amet rutrum. In pulvinar, nulla non venenatis lobortis, turpis ex aliquam risus, a iaculis nisi metus a leo.</p>
                <p>Ut aliquet nulla velit, eu cursus justo faucibus efficitur. Nam tempus, lorem ac interdum ultricies, diam est bibendum orci, sit amet feugiat dui libero id elit. Maecenas pellentesque vitae nisi vel eleifend. Phasellus consequat felis ut sem dignissim, ut mattis nisl fringilla.</p>
                <div>1. You’re going to want to learn more about that cheese.</div>
                <div>2. You might potentially want to buy that cheese.</div>
                <div>3. You’ll want to buy that cheese over any of the other cheeses in the store!</div>
            </div>
            <div className='text-center grid gap-5'>
                <img src="https://cdn.prod.website-files.com/63337525695d8b8aebb4423f/63337525695d8b087ab44288_60a34cf4e5cbdc57c2b6467c_Blog%2520Image%2520Tesla.jpeg" alt="" />
                <div>
                     Building with Felix is what Elon Musk would do... If he knew about it...
                </div>
            </div>
            <div className='grid gap-5'>
                <h1 className='text-4xl font-bold'>1. Perform A Competitor Analysis</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex odio, pharetra non ullamcorper nec, elementum non ipsum. Etiam a vestibulum est, eget bibendum eros. Nam suscipit leo vitae tincidunt luctus. Sed vestibulum eu lacus sit amet rutrum. In pulvinar, nulla non venenatis lobortis, turpis ex aliquam risus, a iaculis nisi metus a leo. Ut aliquet nulla velit, eu cursus justo faucibus efficitur. Nam tempus, lorem ac interdum ultricies, diam est bibendum orci, sit amet feugiat dui libero id elit.</p>
                <p>Maecenas pellentesque vitae nisi vel eleifend. Phasellus consequat felis ut sem dignissim, ut mattis nisl fringilla.</p>
            </div>
            <div>
                <img src="https://cdn.prod.website-files.com/63337525695d8b8aebb4423f/63337525695d8b8d27b44266_605c6a2a33f67d62ba0b0c5d_Blog%2520Post%2520Featured.jpeg" alt="" />
            </div>
            <div className='grid gap-5'>
                <h1 className='text-4xl font-bold'>Wrapping This Up…</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex odio, pharetra non ullamcorper nec, elementum non ipsum. Etiam a vestibulum est, eget bibendum eros. Nam suscipit leo vitae tincidunt luctus. Sed vestibulum eu lacus sit amet rutrum. In pulvinar, nulla non venenatis lobortis, turpis ex aliquam risus, a iaculis nisi metus a leo. Ut aliquet nulla velit, eu cursus justo faucibus efficitur. Nam tempus, lorem ac interdum ultricies, diam est bibendum orci, sit amet feugiat dui libero id elit. Maecenas pellentesque vitae nisi vel eleifend. Phasellus consequat felis ut sem dignissim, ut mattis nisl fringilla.</p>
            </div>
        </motion.div>
    </section>
  )
}

export default Main
