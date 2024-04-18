import React from 'react'
import Group from './group';

const GroupList = ({groups}) => {  
    console.log(groups);

   // Sort groups by points
  const sortedGroups = groups.sort((a, b) => b.points - a.points);

  return (
    <div className="flex justify-center flex-wrap mt-20">
      {sortedGroups.map((group, index) => (
        <div key={index}>
          <Group group={group} podium={index + 1} />
        </div>
      ))}
    </div>
  );
}

export default GroupList