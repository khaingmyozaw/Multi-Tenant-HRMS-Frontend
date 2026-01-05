import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { InputFieldType } from './types'

const InputField = ({
    label,
    name,
    id,
    type,
    placeholder,
    className = '',
    error = ''
}: InputFieldType) => {
    return (
        <div className="grid w-full items-center gap-2">
            <Label htmlFor={id} className='text-neutral-700'>{label}</Label>
            <Input
                type={type || 'text'}
                name={name}
                id={id}
                placeholder={placeholder}
                className={`w-full h-12 px-4 py-3 focus-visible:ring-3 placeholder:text-neutral-400 ${error ? 'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/20' : 'border-neutral-400 focus-visible:border-brand-300 focus-visible:ring-brand-300/20'} ${className}`}
            />
            {
                error ? <small className="text-red-500">{error}</small> : ''
            }
        </div>
    )
}

export default InputField