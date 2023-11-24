import RemoveBtn from "./RemoveBtn"

type tasks = {
    "_id": string,
    "title": string,
    "description": string,
    "completed":boolean
}

const getTasks = async () => {
    try {
        const res=await fetch("http://localhost:3000/api/tasks", {
            next:{revalidate:2}
        })
        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }
        return res.json()
    } catch (error) {
        console.log('Error loading tasks',error)
    }
}


export default async function CompletedTasksList() {
    const data = await getTasks()
    const allTasks= data.tasks
    
    return (<div className="container">
        <ul className="list">
            {allTasks.filter((t:tasks)=>t.completed).map((t:tasks,i:number) => {
                return (
                    <li key={i} className="task-bar">
                        <div>
                        <p className="title-text">{t.title}</p>
                           <div className="tags">
                            <RemoveBtn id={t._id} />
                            </div>
                        </div>
                        <p className="subtitle-text">{t.description}</p>
                   </li>
                )
            })}
        </ul>
  </div>   )
}