import React from 'react'

function Banner() {
  return (
    <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
            <h1 className='text-6xl max-w-xl font-serif'>
                <span className='underline decoration-black decoration-4'>Medium</span>, is a place to write, read and connect</h1>
            <h2 className=''>
                It's easy and free to post what you are thinking on any topic and connect with millions of reader
            </h2>
        </div>
        <img className='hidden md:inline-flex h-20 lg:h-full px-10' src="https://cdn-icons-png.flaticon.com/512/2111/2111505.png" alt="medium logo 1" />
    </div>
  )
}

export default Banner