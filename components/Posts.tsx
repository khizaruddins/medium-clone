import React from 'react'

function Posts({posts}: any) {
  return (
    <div className='flex items-center'>
        {posts.map((post: any) => {
          return <div className='p-5'> 
            <img src="" alt="" />
          </div>
        })}
    </div>
  )
}

export default Posts