import SignupForm from '@/components/auth/SignupForm'
import { Metadata } from 'next'
import React from 'react'

const metadata:Metadata = {
  title: 'Humano HR | Sign up',
  description: 'This is sign up page for Humano HR system',
};

const SignUp = () => {
  return (
    <SignupForm />
  )
}

export default SignUp