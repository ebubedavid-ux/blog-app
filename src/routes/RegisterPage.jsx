import React from 'react'
import { SignUp } from '@clerk/clerk-react'

function RegisterPage() {
  return (
    
    <div className='flex items-center justify-center '>
      <SignUp signInUrl='/login' />
    </div>

  )
}

export default RegisterPage
