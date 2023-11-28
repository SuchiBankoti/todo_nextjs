'use client'
import { useState } from "react"

type tasks = {
    "id": string,
    "title": string,
    "description":string
}



export default function EditTask({id,title,description}:tasks) {
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
      if (!isChecked) {
          completeTask()
        }
    };
    
    const completeTask = async () => {
        const confirmed = confirm('are you sure?')
        
        if (confirmed) {
            const res=await fetch(`${process.env.https://suchibankoti.github.io/todo_nextjs/}/api/tasks/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    newTitle: title,
                    newDescription: description,
                    newCompleted:true
                })
            })
            if (res.ok) {
                console.log('updated')
            }
        }
        setIsChecked(!isChecked);
    }
    return (
        <div className="markbox">
            <p className="mark-text">Mark as complete</p>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
        </div>
    )
}