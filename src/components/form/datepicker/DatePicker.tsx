"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import clsx from "clsx"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

type DatePickerTypes = {
    label?: string;
    placeholder?: string;
    className?: string;
};

const DatePicker = ({ label, placeholder, className = '' }: DatePickerTypes) => {
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined)

    return (
        <div className="w-full flex flex-col gap-3">
            <Label htmlFor="date" className="px-1">
                {label}
            </Label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        id="date"
                        className={clsx(
                            "h-12 w-full px-4 py-3 rounded-lg justify-between font-normal text-neutral-400 bg-transparent border-neutral-400 focus-visible:border-brand-300 focus-visible:ring-brand-300/20 focus-visible:ring-3 hover:bg-neutral-100 hover:text-neutral-500",
                            className
                        )}
                    >
                        {date ? date.toLocaleDateString() : (placeholder ?? "Select date")}
                        <ChevronDownIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                            setDate(date)
                            setOpen(false)
                        }}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default DatePicker;