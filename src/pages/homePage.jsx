import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import AdminGroup from '../components/admin/adminGroup';
import GroupForm from '../components/admin/groupForm';
import { Link } from 'react-router-dom';
uuidv4()

function Home() {
  const [groups, setGroups] = useState(() => {
    const storedGroups = localStorage.getItem('groups');
    return storedGroups ? JSON.parse(storedGroups) : [];
  });

  const addGroup = (title, points, players) => {
    const newGroup = {
        id: uuidv4(),
        title: title,
        points: points,
        players: players
    };
    let afterGroups = [...groups, newGroup]; 
    setGroups(afterGroups);
    localStorage.setItem('groups', JSON.stringify(afterGroups));
  };

  const deleteGroup = id => {
    let afterGroups = groups.filter(group => group.id!== id);
    setGroups(afterGroups);
    localStorage.setItem('groups', JSON.stringify(afterGroups));
  }

  const editGroup = ((title, points, players, id) => {
    let afterGroups = groups.map(group => group.id === id ? {...group,
      title, points, players}: group);
    setGroups(afterGroups);
    localStorage.setItem('groups', JSON.stringify(afterGroups));
  })

  return (
    <div className='relative'>
      <Link to="/groupPage" target="_blank" rel="noopener noreferrer">
        <button className='fixed top-0 left-0 rounded bg-gray-700 text-white p-3 m-3'>Otwórz widok</button>
      </Link>
      <GroupForm addGroup={addGroup} />
      <div className="flex w-full flex-wrap justify-center gap-2">
        {
          groups.map((group, idx) => (
            <AdminGroup key={idx} group={group} editGroup={editGroup} deleteGroup={deleteGroup} />
          ))
        }
      </div>
    </div>
  )
}

export default Home