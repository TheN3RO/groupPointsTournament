import React, { useEffect, useState } from 'react'
import { BsFillTrashFill } from "react-icons/bs";

const AdminGroup = ({group, editGroup, deleteGroup}) => {
    const [title, setTitle] = useState(group.title)
    const [points, setPoints] = useState(group.points)
    const [players, setPlayers] = useState(group.players)

    useEffect(() => {
        editGroup(title, points, players, group.id);
    }, [title]);
    
    useEffect(() => {
        editGroup(title, points, players, group.id);
    }, [points]);
    
    useEffect(() => {
        editGroup(title, points, players, group.id);
    }, [players]);

    return (
        <div className='mt-2 rounded border border-gray-400 p-3'>
            <div className='flex gap-3 items-center mb-3'>
                <input type='text' className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] rounded placeholder:text-gray-300'
                placeholder='Nazwa grupy' 
                onChange={(e) => setTitle(e.target.value)} value={title}/>
                <input type='number' className='outline-none bg-transparent border border-gray-500 p-4 w-[100px] rounded'
                onChange={(e) => setPoints(e.target.value)} value={points}/>
                <BsFillTrashFill className='text-3xl' onClick={() => deleteGroup(group.id)} />
            </div>
            <div className='flex'>
                <input type='text' className='outline-none bg-transparent border border-gray-500 p-4 w-[450px] mb-4 rounded placeholder:text-gray-300'
                    placeholder='Gracze...' 
                    onChange={(e) => setPlayers(e.target.value.split(', '))} value={players.join(", ")} />
            </div>
        </div>
      )
}

export default AdminGroup