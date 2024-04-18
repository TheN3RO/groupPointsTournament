import React, { useEffect, useState } from 'react'
import GroupList from '../components/client/groupList'

const GroupPage = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const storedGroups = localStorage.getItem('groups');
    if (storedGroups) {
      setGroups(JSON.parse(storedGroups));
    }
  }, []);

  return (
    <div className='flex justify-center items-center flex-col bg-zinc-300'>
        <h1 className='text-5xl my-5 font-bold text-center font-poppins'>Wyniki grupowe</h1>
        <section className='flex justify-center items-center'>
          <GroupList groups={groups} />
        </section>
    </div>
  )
}

export default GroupPage