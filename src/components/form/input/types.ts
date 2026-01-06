import React from 'react'

export type InputFieldType = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: React.ReactNode;
    error?: string;
}