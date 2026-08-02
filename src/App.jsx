import TaskCard from './components/TaskCard';

export default function App() {
  return (
    <main>
      <h1>SyncBoard</h1>
      <TaskCard title="Design login" assignee="Nimali" due="Friday" done={false} /><br />
      <TaskCard title="Fix Bugs" assignee="John Doe" due="Monday" done={true} />
    </main>
  )
}