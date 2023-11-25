'use client'
import { useState, ChangeEvent } from "react"

type tasks = {
    "_id": string,
    "title": string,
    "description":string
}

console.log("add taskurl",process.env.NEXT_PUBLIC_URL_AUTH)

export default function AddTask() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        completed:false
    })
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleSubmit = async () => {
        if (!formData.title || !formData.description) {
            alert("Title and description are required")
      return
  }
        try {
           const res= await fetch(`${process.env.NEXT_PUBLIC_URL_AUTH}/api/tasks`, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(formData)
            })   
            if (res.ok) {
                alert("task added")
        }    
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="container">
            <form className="form">
                <label>
                    Title
                </label>
                    <input
                        className="input"
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    />
                <label>
                    Description
                </label>
                    <input
                        className="input"
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    />
            </form>
            <button onClick={handleSubmit} className="btn">Add</button>
        </div>
    )
}