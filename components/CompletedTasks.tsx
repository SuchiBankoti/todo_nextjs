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
            cache:"no-store"
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
    
    return (<div>
        <h1>All tasks</h1>
        <ul>
            {allTasks.filter((t:tasks)=>t.completed).map((t:tasks,i:number) => {
                return (
                    <li key={i}>
                        <p><b>{t.title}</b></p>
                        <p>{t.description}</p>
                        <div>
                            <RemoveBtn id={t._id} />
                            {/* <EditTask id={t._id} title={t.title} description={t.description} /> */}
                        </div>
                   </li>
                )
            })}
        </ul>
  </div>   )
}