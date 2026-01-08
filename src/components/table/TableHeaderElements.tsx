import React from 'react'
import { Input } from '../ui/input'

type ElementTypes = {
    children?: React.ReactNode;
    className?: string;
};

const TableHeaderElements: React.FC = ({ children, className = '' }: ElementTypes) => {
    return (
        <div className={`flex justify-between items-center dark:text-white ${className}`}>
            10 rows per page
            {children}
            <Input
                type='text'
                name='search'
                id='search'
                placeholder='Search here'
                className='w-auto p-2 shadow-none placeholder:text-neutral-400 border-neutral-200 bg-neutral-900/[0.03] focus-visible:border-brand-300 focus-visible:ring-0 dark:border-neutral-700 dark:focus-visible:border-brand-900'
            />
        </div>
    )
}

export default TableHeaderElements