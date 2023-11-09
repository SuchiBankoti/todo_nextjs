import RemoveBtn from "./RemoveBtn"
import EditTask from "./EditTask"

type tasks = {
    "_id": string,
    "title": string,
    "description": string,
    "completed":boolean
}

const getTasks = async () => {
    try {
        const res=await fetch("http://localhost:3000/api/tasks", {
            next:{revalidate:5}
        })
        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }
        console.log('done')
        return res.json()
    } catch (error) {
        console.log('Error loading tasks',error)
    }
}


export default async function TasksList() {
    const data = await getTasks()
    const allTasks= data.tasks
    console.log('all', allTasks)
    

    if (allTasks) {
        return (<div className="cont">
        <h1>All tasks</h1>
        <ul className="list">
            {allTasks.filter((t:tasks)=>!t.completed).map((t:tasks,i:number) => {
                return (
                    <li key={i}>
                        <div>
                        <p><b>{t.title}</b></p>
                           <div className="tags">
                            <RemoveBtn id={t._id} />
                            <EditTask id={t._id} title={t.title} description={t.description} />
                            </div>
                        </div>
                        <p className="des">{t.description}</p>
                   </li>
                )
            })}
        </ul>
        </div>)
    } else {
        return <div>Loading...</div>
    }
   
}