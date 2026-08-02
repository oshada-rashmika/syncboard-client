function TaskCard({ title, assignee, due, done}) {
    return (
        <article className="task-card">
            <h2>{title}</h2>
            <p>Assignee: {assignee}</p>
            <p>Due: {due}</p>
        </article>
    )
}

<>
    <TaskCard title="Design login" assignee="Nimali" due="Friday" done={false} />
    <TaskCard title="Fix Bugs" assignee="John Doe" due="Monday" done={true} />
</>