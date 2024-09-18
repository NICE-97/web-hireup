import React from 'react'
import company from '../../data/company'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import { Swiper,SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules'
import SingleCompanies from '../../component/SingleCompanies';

// Motion Control
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

function Companies() {
  return (
    <section className='container max-w-full'>
            <div className='max-w-7xl mx-auto px-10 py-20'>
                <motion.div 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0}}
                
                className='grid md:grid-cols-2'>
                    <div>
                        <h1 className='text-4xl font-bold'>Work with exciting companies</h1>
                        <p className='text-gray-500 text-xl mt-5'>Discover more than 1,600 open positions</p>
                    </div>
                    <div className='grid justify-end'>
                        <div className='grid content-end mt-5 md:mt-0 relative'>
                            <div className='grid grid-flow-col gap-5 text-xl mb-5'>
                                {/* <div className='border-solid border-2 cursor-pointer transition duration-300 ease-in-out border-slate-200 px-3 py-2 hover:bg-slate-200'>
                                    <button><FaArrowLeft /></button>
                                </div>
                                <div className='border-solid border-2  cursor-pointer transition duration-300 ease-in-out border-slate-200 px-3 py-2 hover:bg-slate-200'>
                                    <button><FaArrowRight /></button>
                                </div> */}
                                <div className='swiper-button-next absolute right-12 w-20 h-20 '>
                                    <div className='content-center text-black border-2 p-2 transition duration-300 ease-in-out border-slate-200 px-3 py-2 hover:bg-slate-200'>
                                        <FaArrowLeft />
                                    </div>
                                </div>
                                <div className='swiper-button-next absolute -right-4 w-20 h-20 '>
                                    <div className='content-center text-black border-2 p-2 transition duration-300 ease-in-out border-slate-200 px-3 py-2 hover:bg-slate-200'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView={'show'} 
                viewport={{once: false, amount: 0}}

                >
                    <Swiper
                    effect={ 'coverflow'}
                    grabCursor={ true }
                    centeredSlides={ true }
                    loop={ true }
                    slidesPerView={'auto'}
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 0,
                            modifier: 0,
                        }
                    }
                    pagination={{el:'.swiper-pagination',clickable:true}}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable:true,
                    }}
                    modules={[EffectCoverflow,Pagination,Navigation]}
                    className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 swiper_container'
                    >
                        {company.map((item, index) => {
                            return(
                                <SwiperSlide key={`${index}-${item.company}`}>
                                    <SingleCompanies {...item}/>
                                </SwiperSlide>
                            )
                        })}
                        <div className='swiper-pagination'></div>
                    </Swiper>
                </motion.div>
            </div>
    </section>
  )
}

export default Companies
