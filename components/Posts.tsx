import Link from 'next/link'
import React from 'react'

function Posts({posts}: any) {
  return (
    <div className='flex items-center space-x-5 justify-center mt-5'>
        {posts.map((post: any) => {
          return <Link href={`/posts/${post?.attributes?.slug}`} key={post.id}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
            <img className='object-contain w-full' src={`http://localhost:1337${post?.attributes?.blog_media?.data?.attributes.url}`} alt="" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{post?.attributes?.title}</div>
              <p className="text-gray-700 text-xs">
                {post?.attributes?.blog_description}
              </p>
            </div>
          </div>
          </Link>
        })}
    </div>
  )
}

export default Posts