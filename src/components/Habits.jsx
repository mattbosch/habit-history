import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Habits = () => {
    const [habits, setHabits] = useState([])
    const [newHabit, setNewHabit] = useState()
    const navigate = useNavigate()

    const addHabit = () => {
        if (newHabit.trim()) {
            setHabits([...habits, newHabit.trim()])
            setNewHabit('')
        }
    }

    return (
        <div>
            <h2>My Habits</h2>
            <ul>
                {habits.map((habit, index) => (
                    <li key={index}>{habit}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newHabit}
                onChange={(e) => setNewHabit(e.target.value)}
                placeholder='New Habit'
            />
            <button onClick={addHabit}>Add Habit</button>
            <button onClick={() => navigate('/')}>Back</button>
        </div>
    )

}

export default Habits