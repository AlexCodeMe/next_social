import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function RegisterPage() {
    return (
        <div className='h-[calc(100vh-96px)] flex items-center justify-center'>
            <SignUp />
        </div>
      )
}
