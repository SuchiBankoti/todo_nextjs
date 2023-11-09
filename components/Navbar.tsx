import Link from "next/link"

export default function Navbar() {
    return (
        <div className="nav">
            <Link href="/">Tasks</Link>
            <Link href="/completedtasks">Completed Tasks</Link>
            <Link href="/addTask">Add Task</Link>
        </div>
    )
}