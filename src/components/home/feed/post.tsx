import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import React from 'react'
import Comments from './comments'

export default function Post() {
    const { userId } = auth()

    return (
        <div className="flex flex-col gap-4">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src='https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg'
                        // src={post.user.avatar || "/noAvatar.png"}
                        width={40}
                        height={40}
                        alt=""
                        className="w-10 h-10 rounded-full"
                    />
                    <span className="font-medium">Alex Moyer
                        {/* {post.user.name && post.user.surname
            ? post.user.name + " " + post.user.surname
            : post.user.username} */}
                    </span>
                </div>
                {/* {userId === post.user.id && <PostInfo postId={post.id} />} */}
            </div>
            {/* DESC */}
            <div className="flex flex-col gap-4">
                <div className='w-full min-h-96 relative'>
                            <Image src ='https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg'
                                alt='' fill
                                className='object-cover rounded-md' />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, ratione. Neque eveniet autem adipisci distinctio, doloremque minus laborum saepe reprehenderit illum in suscipit consectetur deserunt?</p>
                {/* {post.img && (
        <div className="w-full min-h-96 relative">
          <Image
            src={post.img}
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>
      )}
      <p>{post.desc}</p> */}
            </div>
            {/* INTERACTION */}
            <div className='flex items-center justify-between text-sm'>
                <div className='flex gap-8'>
                    <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                        <Image src='/like.png' alt=''
                            width={16} height={16}
                            className='cursor-pointer'
                        />
                        <span>|</span>
                        <span>123<span className='hidden md:inline ml-1'>Likes</span></span>
                    </div>
                    <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                        <Image src='/comment.png' alt=''
                            width={16} height={16}
                            className='cursor-pointer'
                        />
                        <span>|</span>
                        <span>123<span className='hidden md:inline ml-1'>Comments</span></span>
                    </div>
                </div>
                <div>

                    <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                        <Image src='/share.png' alt=''
                            width={16} height={16}
                            className='cursor-pointer'
                        />
                        <span>|</span>
                        <span>123<span className='hidden md:inline ml-1'>Shares</span></span>
                    </div>
                </div>
            </div>
            <div>
                <Comments />
            </div>
            {/* <Suspense fallback="Loading...">
      <PostInteraction
        postId={post.id}
        likes={post.likes.map((like) => like.userId)}
        commentNumber={post._count.comments}
      />
    </Suspense>
    <Suspense fallback="Loading...">
      <Comments postId={post.id} />
    </Suspense> */}
        </div>
    )
}
