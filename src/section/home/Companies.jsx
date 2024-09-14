import React from 'react'
import company from '../../data/company'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import { Swiper,SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules'

function Companies() {
  return (
    <section className='container max-w-full'>
            <div className='max-w-7xl mx-auto px-10 py-20'>
                <div className='grid md:grid-cols-2'>
                    <div>
                        <h1 className='text-4xl font-bold'>Work with exciting companies</h1>
                        <p className='text-gray-500 text-xl mt-5'>Discover more than 1,600 open positions</p>
                    </div>
                    <div className='grid justify-end'>
                        <div className='grid content-end mt-5 md:mt-0'>
                            <div className='grid grid-flow-col gap-5 text-xl'>
                                <div className='border-solid border-2 cursor-pointer transition duration-300 ease-in-out border-slate-200 px-3 py-2 hover:bg-slate-200'>
                                    <button><FaArrowLeft /></button>
                                </div>
                                <div className='border-solid border-2  cursor-pointer transition duration-300 ease-in-out border-slate-200 px-3 py-2 hover:bg-slate-200'>
                                    <button><FaArrowRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                    {company.map((items, index) => {
                        return(
                            <SwiperSlide key={`${index}-${items.company}`} className='grid gap-5 border-2 border-slate-200 px-10 py-10'>
                                <div className='flex gap-5'>
                                    <div className='border-solid border-2 p-2'>
                                        <img src={items.logo} alt="ball" />
                                    </div>
                                    <div className='content-center'>
                                        <h3 className='font-bold text-2xl'>Dribble</h3>
                                    </div>
                                </div>
                                <div className='text-gray-500 font-semibold'>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, sint!</p>
                                </div>
                                <div className='inline-block'>
                                    <div className='px-4 py-2 bg-green-200 font-semibold text-green-600 inline-block'>
                                        <button>65 Employees</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    <div className='swiper-pagination'></div>
                </Swiper>
            </div>
    </section>
  )
}

export default Companies
