import React from "react";

export type SelectFieldTypes = (
    | {
        items: string[]
        children?: never
    }
    | {
        items?: never
        children: React.ReactNode
    }
) & {
    label?: string
    placeholder?: string
    className?: string
}
