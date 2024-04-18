import React, { useState } from 'react'

export const GroupForm = ({addGroup}) => {
    const [title, setTitle] = useState('')
    const [points, setPoints] = useState(10)
    const [players, setPlayers] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        addGroup(title, points, players)
        setTitle('')
        setPoints(10)
        setPlayers([])
    }

    return (
        <form className='flex justify-center m-2' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <input type='text' className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] mb-4 rounded placeholder:text-gray-300'
                placeholder='Nazwa grupy' 
                onChange={(e) => setTitle(e.target.value)} value={title}/>
                <input type='number' className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] mb-4 rounded'
                onChange={(e) => setPoints(e.target.value)} value={points}/>
                <input type='text' className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] mb-4 rounded placeholder:text-gray-300'
                placeholder='Gracze...' 
                onChange={(e) => setPlayers(e.target.value.split(', '))} value={players.join(", ")} />
                <button className='bg-gray-500 border-none p-4 text-white cursor-pointer rounded'>Dodaj grupę</button>
            </div>
        </form>
    )
}

export default GroupForm
