import React from 'react'
import { IoMdSearch } from 'react-icons/io'

function Header() {
  return (
    <section className='container max-w-full'>
            <div className='max-w-7xl mx-auto px-10 py-20 flex justify-center'>
                <div className='md:w-4/6 grid gap-10'>
                    <div className='text-center grid gap-5'>
                        <h1 className='text-4xl font-bold'>Builda complete job board with Webflow memberships</h1>
                        <p className='text-lg text-gray-700 px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornar.</p>
                    </div>
                    <div className='border-2 px-5 py-2 bg-white'>
                        <div className='flex justify-between'>
                            <div className='content-center text-xl'><IoMdSearch /></div>
                            <div className='p-2 px-2 w-full'>
                                <input className='w-full focus:outline-none' type="text" placeholder='Search'/>
                            </div>
                            <div className='px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-center'>
                                <button>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Header
