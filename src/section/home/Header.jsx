import React from 'react'
import amazon from '../../assets/amazon.svg'
import dropbox from '../../assets/dropbox.svg'
import hubspot from '../../assets/hubspot.svg'
import opentable from '../../assets/opentable.svg'
import shopify from '../../assets/shopify.svg'
import slack from '../../assets/slack.svg'

function Header() {
  return (
    <section className='container max-w-full'>
            <header className='max-w-7xl mx-auto px-10 py-20'>
                <div className='grid lg:grid-cols-2'>
                    <div>
                        <div className='inline-block bg-gray-100 px-4 py-2 rounded-sm'>
                            <div className='flex gap-2 font-medium'>
                                <h4 className='text-md bg-white px-2 py-1 text-blue-700'>NEW</h4>
                                <p className='content-center'>Stay connected to get upcoming jobs</p>
                            </div>
                        </div>
                        <div className='w-5/6 mt-5 text-5xl font-bold'>
                            <h1>Find the most exciting jobs in tech</h1>
                        </div>
                    </div>
                    <div className='text-gray-700 text-lg font-medium grid content-end lg:justify-items-end mt-5'>
                        <div className='w-5/6'>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et. <span className='text-blue-700'><a href=''>Sign in</a></span> or <span className='text-blue-700'><a href=''>sign up</a></span> to get started!</h3>
                        </div>
                    </div>
                </div>
                <div className='mt-10 h-96 lg:h-144'>
                    <img className='w-full h-full object-cover' src="https://assets.website-files.com/63337525695d8ba70ab44222/6358b2bbb9fdec69f1b1c7a4_adam-rhodes-ep5lX958f7E-unsplash-p-2000.webp" alt="" />
                </div>
                <div className='hidden sm:grid justify-items-center'>
                    <div className='flex relative'>
                        <div className='span absolute -left-12 z-0'></div>
                        <div className='bg-gray-100 px-4 py-4 z-10'>
                            <div className='text-base font-semibold'>
                                <h4 className='text-gray-500'>Work for <span className='text-gray-800'>industry leading</span> global companies</h4>
                            </div>
                        </div>
                        <div className='span absolute -right-12'></div>
                    </div>
                </div>
                <div className='mt-10 grid grid-cols-3 md:grid-cols-6 gap-8 p-2 [&>div:not(child)]:py-2 [&>div:not(child)]:content-center'>
                    <div>
                        <img className='w-full' src={opentable} alt="opentable" />
                    </div>
                    <div>
                        <img className='w-full' src={hubspot} alt="hubspot" />
                    </div>
                    <div>
                        <img className='w-full' src={amazon} alt="amazon" />
                    </div>
                    <div>
                        <img className='w-full' src={shopify} alt="shopify" />
                    </div>
                    <div>
                        <img className='w-full' src={slack} alt="slack" />
                    </div>
                    <div>
                        <img className='w-full' src={dropbox} alt="dropbox" />
                    </div>
                </div>
            </header>
    </section>
  )
}

export default Header
