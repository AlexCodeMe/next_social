import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FriendRequests() {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">Friend Requests</span>
                <Link href="/" className="text-blue-500 text-xs">
                    See all
                </Link>
            </div>
            {/* USER */}
            <div className='flex items-center justify-between'>
                <div>
                    <Image src='https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg'
                        alt='' className='size-10 rounded-full object-cover' width={20} height={20}

                    />
                    <span>Wayne Burton</span>
                </div>
                <div className='flex gap-3 justify-end'>
                    <Image src='/accept.png' alt='' width={20} height={20} className='cursor-pointer' />
                    <Image src='/reject.png' alt='' width={20} height={20} className='cursor-pointer' />
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div>
                    <Image src='https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg'
                        alt='' className='size-10 rounded-full object-cover' width={20} height={20}

                    />
                    <span>Wayne Burton</span>
                </div>
                <div className='flex gap-3 justify-end'>
                    <Image src='/accept.png' alt='' width={20} height={20} className='cursor-pointer' />
                    <Image src='/reject.png' alt='' width={20} height={20} className='cursor-pointer' />
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div>
                    <Image src='https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg'
                        alt='' className='size-10 rounded-full object-cover' width={20} height={20}

                    />
                    <span>Wayne Burton</span>
                </div>
                <div className='flex gap-3 justify-end'>
                    <Image src='/accept.png' alt='' width={20} height={20} className='cursor-pointer' />
                    <Image src='/reject.png' alt='' width={20} height={20} className='cursor-pointer' />
                </div>
            </div>
            {/* <FriendRequestList requests={requests}/> */}

        </div>
    )
}
