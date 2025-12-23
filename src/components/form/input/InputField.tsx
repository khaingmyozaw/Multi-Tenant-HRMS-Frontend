import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { InputFieldType } from './type'

const InputField = ({
    label,
    name,
    id,
    placeholder,
    className = '',
}: InputFieldType) => {
    return (
        <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor={id}>{label}</Label>
            <Input 
                name={name} 
                id={id} 
                placeholder={placeholder} 
                className={`w-full h-11 px-4 py-2.5 border-gray-300 focus-visible:border-brand-300 focus-visible:ring-brand-300/20 focus-visible:ring-3 ${className}`}
            />
        </div>
    )
}

export default InputField