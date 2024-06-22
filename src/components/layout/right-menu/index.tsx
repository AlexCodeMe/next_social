import React from 'react'
import FriendRequests from './friend-requests'
import Birthdays from './birthdays'
import Ad from '@/components/custom/ad'
import UserInfoCard from './user-info-card'
import UserMediaCard from './user-media-card'

export default function RightMenu({ userId }: { userId?: string }) {
  return (
    <div className='flex flex-col gap-6'>
      {userId ? (
        <>
            <UserInfoCard userId={userId} />
            <UserMediaCard userId={userId} />
        </>
      ) : null}
        <FriendRequests />
        <Birthdays />
        <Ad size='md' />
    </div>
  )
}
