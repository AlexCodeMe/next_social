import AddPost from '@/components/home/add-post'
import Feed from '@/components/home/feed/feed'
import Stories from '@/components/home/stories'
import LeftMenu from '@/components/layout/left-menu'
import RightMenu from '@/components/layout/right-menu'
import React from 'react'

export default function ProfileIdPage() {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId='test' />
      </div>
    </div>
  )
}
