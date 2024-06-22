import Image from 'next/image'
import React from 'react'

export default function Comments() {
    return (
        <div>
            <div className='flex items-center gap-4'>
                <Image src='https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg'
                    alt='' width={32} height={32} />
                <div className='flex-1 flex items-center justify-between p-2 bg-slate-100 rounded-full'>
                    <input type='text'
                        placeholder='Write a comment...'
                        className='bg-transparent outline-none flex-1' />
                    <Image src='/emoji.png' alt=''
                        height={16} width={16}
                        className='cursor-pointer' />
                </div>
            </div>
            {/* Comments */}
            <div className='flex gap-4 mt-6 justify-between'>
                {/**Avatar */}
                <div className=''>
                    <Image src='https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg'
                        alt='' width={40} height={40} />
                </div>
                {/**Desc */}
                <div className=' flex flex-col gap-2'>
                    <span className='font-medium'>Alex Moyer</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dignissimos accusamus pariatur molestiae esse at vitae sequi facilis, ducimus, beatae, odit dolore consectetur illum.</p>
                    <div className='flex items-center gap-8 text-xs text-gray-500'>
                        <div className='flex items-center gap-4'>
                            <Image src='/like.png' alt=''
                                width={12} height={12}
                                className='cursor-pointer h-4 w-4' />
                        </div>
                        <span>|</span>
                        <span>123 Likes</span>
                    </div>
                    <div>Reply</div>
                </div>
                {/**Icon */}
                <div className=''>
                    <Image src='/more.png' alt=''
                        width={16} height={16}
                        className='cursor-pointer h-4 w-4' />
                </div>
            </div>
        </div>
    )
}
