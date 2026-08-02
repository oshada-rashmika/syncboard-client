export default function TaskCard({ title, assignee, due, done}) {
    return (
        <article className="task-card">
            <h2>{title}</h2>
            <p>Assignee: {assignee}</p>
            <p>Due: {due}</p>
        </article>
    )
}