import * as React from "react"

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
}: SelectFieldTypes) => {
    return (
        <Select>
            <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="mt-">
                <SelectGroup>
                    {
                        label ? <SelectLabel>{label}</SelectLabel> : ''
                    }
                    {
                        children ?? items?.map((item, key) => {
                            return (
                                <SelectItem
                                    key={item}
                                    value={`${key}`}
                                >
                                    {item}
                                </SelectItem>
                            )
                        })
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
export default SelectField;
