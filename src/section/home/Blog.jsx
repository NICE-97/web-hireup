import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import blogs from '../../data/blogs'

import { Swiper,SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules'

function Blog() {
  return (
    <section className='container max-w-full'>
            <div className='max-w-7xl mx-auto px-10 py-20'>
                <div className='grid md:grid-cols-2'>
                    <div>
                        <h3 className='text-xl font-semibold text-blue-700'>Blog</h3>
                        <h1 className='text-4xl font-bold mt-5'>Get the latest news about jobs!</h1>
                    </div>
                    <div className='grid justify-end'>
                        <div className='grid content-end mt-5 md:mt-0'>
                            <div className='grid grid-flow-col gap-5 text-xl'>
                                <div className='border-solid border-2 cursor-pointer transition duration-300 ease-in-out border-slate-200 px-3 py-2 hover:bg-slate-200'>
                                    <button><FaArrowLeft /></button>
                                </div>
                                <div className='border-solid border-2 cursor-pointer transition duration-300 ease-in-out border-slate-200 px-3 py-2 hover:bg-slate-200'>
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
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 swiper_container'
                >
                    {blogs.map((items, index) => {
                        return(
                            <SwiperSlide key={`${index}-${items.title}`} className='p-4 border-2 border-slate-200'>
                                <div>
                                    <img className='w-full h-60 object-cover' src={items.image} alt={items.title} />
                                </div>
                                <div className='p-5'>
                                    <div className='grid gap-5'>
                                        <div>
                                            <h2 className='px-4 py-2 inline-block bg-blue-100 text-lg text-blue-600'>{items.title}</h2>
                                        </div>
                                        <p className='text-2xl font-bold'>{items.info}</p>
                                        <p className='uppercase text-gray-500 font-medium'>{items.date}</p>
                                        <div className='flex gap-4  justify-center py-2 bg-gray-100 font-medium'>
                                            <button>Read More</button>
                                            <div className='content-center'>
                                                <FaArrowRight />
                                            </div>
                                        </div>
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

export default Blog
