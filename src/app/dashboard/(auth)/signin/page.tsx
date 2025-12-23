import CheckboxField from '@/components/form/input/CheckboxField'
import InputField from '@/components/form/input/InputField'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const SignIn = () => {
  return (
    <>
      <div
        className="p-4 w-full h-full lg:w-1/2 bg-neutral-50"
      >
        <div
          className="h-full max-w-sm mx-auto flex flex-col items-center justify-center gap-6"
        >
          <div
            className="w-full mb-2"
          >
            <h1
              className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md"
            >
              Sign In
            </h1>
            <p
              className="text-xs text-gray-500 dark:text-gray-400"
            >
              Enter your email and password to sign in!
            </p>
          </div>

          <InputField label='Email' name='email' id='email' placeholder='example@gmail.com' />
          <InputField label='Password' name='password' id='password' placeholder='' />

          <div
            className="w-full max-w-sm flex justify-between text-neutral-800">
            <CheckboxField label='Remember me' id='remember' name='is_remember' />

            <Link
              href="/reset-password"
              className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
            >
              Forgot password?
            </Link>
          </div>

          <Button className='h-11 w-full max-w-sm px-4 py-5 rounded-4 bg-brand-500 hover:bg-brand-700'>
            Sign in
          </Button>

          <div className="w-full max-w-sm flex gap-1 text-start">
            <p className='text-sm font-normal text-center text-neutral-700 sm:text-start'>Don't have an account?</p>
            <Link
              href="/reset-password"
              className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn