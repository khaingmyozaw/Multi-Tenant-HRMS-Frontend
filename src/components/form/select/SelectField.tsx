"use client"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { SelectFieldTypes } from "./types"

const SelectField = ({
    items,
    children,
    label,
    placeholder = 'Select a value',
    className = '',
    keyPrefix = '',
}: SelectFieldTypes) => {
    return (
        <Select>
            <SelectTrigger className={`focus-visible:ring-3 focus-visible:ring-brand-300/20 focus-visible:border-brand-300 ${className}`}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="dark:border-neutral-800">
                <SelectGroup>
                    {
                        label ? <SelectLabel>{label}</SelectLabel> : ''
                    }
                    {
                        items ? items?.map((item, key) => {
                            return (
                                <SelectItem
                                    key={`${keyPrefix}_${key}`}
                                    value={`${key}`}
                                >
                                    {item}
                                </SelectItem>
                            )
                        })
                            : children
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
export default SelectField;
