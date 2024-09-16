import React from 'react'
import job from '../../data/jobs'
import { CiLocationOn } from 'react-icons/ci'
import { FaCoins } from 'react-icons/fa'
import SingleJob from '../../component/SingleJob'

// Motion Control
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

function ExploreLatestJob() {
  const jobsSubset = job.slice(0, 6);
  return (
    <section className='container max-w-full bg-zinc-100'>
            <div className='max-w-7xl mx-auto px-10 py-20'>
                <motion.div 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0}}
                
                className='grid md:grid-cols-2'>
                    <div>
                        <h1 className='text-4xl font-bold'>Explore the latest job openings</h1>
                        <p className='text-gray-500 text-xl mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna.</p>
                    </div>
                    <div className='grid justify-end'>
                        <div className='grid content-end mt-5 md:mt-0'>
                            <button className='px-6 py-4 text-white font-semibold bg-blue-700 hover:bg-blue-800'>See All Jobs</button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                variants={fadeIn('left', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0}}
                
                className='mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
                    {jobsSubset.map((item, index) => {
                        return(
                            <SingleJob key={`${index}-${item.company}`} {...item}/>
                        )
                    })}
                </motion.div>
            </div>
    </section>
  )
}

export default ExploreLatestJob
