'use client'

import { RiDeleteBin6Line } from "react-icons/ri"

export default function RemoveBtn({ id }: { id: string }) {
    const removeTask = async () => {
        const confirmed = confirm('are you sure?')
        
        if (confirmed) {
            const res=await fetch(`${process.env.NEXT_PUBLIC_URL_AUTH}/api/tasks?id=${id}`, {
                method:"DELETE"
            })
            if (res.ok) {
            }
        }
    }
    return (
        <button onClick={removeTask}>
            <RiDeleteBin6Line/>
        </button>
    )
} 