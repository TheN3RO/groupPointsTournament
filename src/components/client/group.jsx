import React from 'react'
import styles from './group.module.css';

const Group =({group, podium}) =>  {
  const podiumClasses = {
    1: [styles['bg-gold'], styles['ribbon-gold'], [<svg width="200px" height="200px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#55ACEE" d="M18 8l-7-8H0l14 17l11.521-4.75z"></path><path fill="#3B88C3" d="M25 0l-7 8l5.39 7.312l1.227-1.489L36 0z"></path><path fill="#FFAC33" d="M23.205 16.026c.08-.217.131-.448.131-.693a2 2 0 0 0-2-2h-6.667a2 2 0 0 0-2 2c0 .245.05.476.131.693c-3.258 1.826-5.464 5.307-5.464 9.307C7.335 31.224 12.111 36 18.002 36s10.667-4.776 10.667-10.667c0-4-2.206-7.481-5.464-9.307z"></path><path fill="#9E5200" d="M19.404 18.6h-1.721l-2.73 2.132a.528.528 0 0 0-.112.28v1.178c0 .186.15.354.337.354h1.795v8.414c0 .188.15.355.355.355h2.076c.186 0 .336-.168.336-.355V18.954c0-.186-.149-.354-.336-.354z"></path></svg>]],
    2: [styles['bg-silver'], styles['ribbon-silver'], [<svg width="180px" height="180px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#55ACEE" d="M18 8l-7-8H0l14 17l11.521-4.75z"></path><path fill="#3B88C3" d="M25 0l-7 8l5.39 7.312l1.227-1.489L36 0z"></path><path fill="#CCD6DD" d="M23.205 16.026c.08-.217.131-.448.131-.693a2 2 0 0 0-2-2h-6.667a2 2 0 0 0-2 2c0 .245.05.476.131.693c-3.258 1.826-5.464 5.307-5.464 9.307C7.335 31.224 12.111 36 18.002 36s10.667-4.776 10.667-10.667c0-4-2.206-7.481-5.464-9.307z"></path><path fill="#627077" d="M22.002 28.921h-3.543c.878-1.234 2.412-3.234 3.01-4.301c.449-.879.729-1.439.729-2.43c0-2.076-1.57-3.777-4.244-3.777c-2.225 0-3.74 1.832-3.74 1.832c-.131.15-.112.374.019.487l1.141 1.159a.36.36 0 0 0 .523 0c.355-.393 1.047-.935 1.813-.935c1.047 0 1.646.635 1.646 1.346c0 .523-.243 1.047-.486 1.421c-1.104 1.682-3.871 5.441-4.955 6.862v.374c0 .188.149.355.355.355h7.732a.368.368 0 0 0 .355-.355v-1.682a.367.367 0 0 0-.355-.356z"></path></svg>]],
    3: [styles['bg-bronze'], styles['ribbon-bronze'], [<svg width="160px" height="160px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#55ACEE" d="M18 8l-7-8H0l14 17l11.521-4.75z"></path><path fill="#3B88C3" d="M25 0l-7 8l5.39 7.312l1.227-1.489L36 0z"></path><path fill="#FF8A3B" d="M23.205 16.026c.08-.217.131-.448.131-.693a2 2 0 0 0-2-2h-6.667a2 2 0 0 0-2 2c0 .245.05.476.131.693c-3.258 1.826-5.464 5.307-5.464 9.307C7.335 31.224 12.111 36 18.002 36s10.667-4.776 10.667-10.667c0-4-2.206-7.481-5.464-9.307z"></path><path fill="#7C4119" d="M14.121 29.35l1.178-1.178a.345.345 0 0 1 .467-.038s1.159.861 2.056.861c.805 0 1.628-.673 1.628-1.496s-.842-1.514-2.225-1.514h-.639a.367.367 0 0 1-.354-.355v-1.552c0-.206.168-.355.354-.355h.639c1.309 0 2-.635 2-1.439c0-.805-.691-1.402-1.496-1.402c-.823 0-1.346.43-1.626.747c-.132.15-.355.15-.504.02l-1.141-1.122c-.151-.132-.132-.355 0-.486c0 0 1.533-1.646 3.57-1.646c2.169 0 4.039 1.328 4.039 3.422c0 1.439-1.085 2.505-1.926 2.897v.057c.879.374 2.262 1.533 2.262 3.141c0 2.038-1.776 3.572-4.357 3.572c-2.354 0-3.552-1.16-3.944-1.664c-.113-.134-.093-.34.019-.47z"></path></svg>]],
  };
  return (
    <div className={`relative flex flex-col justify-center w-[300px] p-4 ${podium < 4 ? podiumClasses[podium][0] : styles['bg-default']}`}>
      <div className={`absolute -top-5 left-0 mx-3 flex justify-center items-center
      h-2/5 w-[70px] ${podium < 4 ? podiumClasses[podium][1] : styles['ribbon-default']}`}>
        <span className={`text-4xl flex justify-center items-center 
        rounded-full h-[50px] w-[50px] font-extrabold
        ${podium < 4 ? podiumClasses[podium][0] : styles['bg-default']}`}>{podium}</span>
      </div>
      <div className='absolute top-0 right-1'>
        {podium < 4 ? podiumClasses[podium][2] : 
        <svg width="130px" height="130px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" d="M12 16.0678L8.22855 19.9727C7.68843 20.532 7.41837 20.8116 7.18967 20.9084C6.66852 21.1289 6.09042 20.9402 5.81628 20.4601C5.69597 20.2494 5.65848 19.8694 5.5835 19.1094C5.54117 18.6803 5.52 18.4657 5.45575 18.286C5.31191 17.8837 5.00966 17.5708 4.6211 17.4218C4.44755 17.3553 4.24033 17.3334 3.82592 17.2895L3.82589 17.2895C3.09187 17.2119 2.72486 17.1731 2.52138 17.0485C2.05772 16.7647 1.87548 16.1661 2.08843 15.6265C2.18188 15.3897 2.45194 15.1101 2.99206 14.5509L5.45575 11.9999L6.69396 10.7617L12 16.0678L17.306 10.7617L18.5442 11.9999L21.0079 14.5509C21.5481 15.1101 21.8181 15.3897 21.9116 15.6265C22.1245 16.1661 21.9423 16.7647 21.4786 17.0485C21.2751 17.1731 20.9081 17.2119 20.1741 17.2895C19.7597 17.3334 19.5525 17.3553 19.3789 17.4218C18.9903 17.5708 18.6881 17.8837 18.5442 18.286C18.48 18.4657 18.4588 18.6803 18.4165 19.1094V19.1094C18.3415 19.8694 18.304 20.2494 18.1837 20.4601C17.9096 20.9402 17.3315 21.1289 16.8103 20.9084C16.5816 20.8116 16.3116 20.532 15.7715 19.9727L12 16.0678Z" fill="#1C274C"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16ZM12 6C11.7159 6 11.5259 6.34084 11.1459 7.02251L11.0476 7.19887C10.9397 7.39258 10.8857 7.48944 10.8015 7.55334C10.7173 7.61725 10.6125 7.64097 10.4028 7.68841L10.2119 7.73161C9.47396 7.89857 9.10501 7.98205 9.01723 8.26432C8.92945 8.54659 9.18097 8.84072 9.68403 9.42898L9.81418 9.58117C9.95713 9.74833 10.0286 9.83191 10.0608 9.93531C10.0929 10.0387 10.0821 10.1502 10.0605 10.3733L10.0408 10.5763C9.96476 11.3612 9.92674 11.7536 10.1565 11.9281C10.3864 12.1025 10.7318 11.9435 11.4227 11.6254L11.6014 11.5431C11.7978 11.4527 11.8959 11.4075 12 11.4075C12.1041 11.4075 12.2022 11.4527 12.3986 11.5431L12.5773 11.6254C13.2682 11.9435 13.6136 12.1025 13.8435 11.9281C14.0733 11.7536 14.0352 11.3612 13.9592 10.5763L13.9395 10.3733C13.9179 10.1502 13.9071 10.0387 13.9392 9.93531C13.9714 9.83191 14.0429 9.74833 14.1858 9.58118L14.316 9.42898C14.819 8.84072 15.0706 8.54659 14.9828 8.26432C14.895 7.98205 14.526 7.89857 13.7881 7.73161L13.5972 7.68841C13.3875 7.64097 13.2827 7.61725 13.1985 7.55334C13.1143 7.48944 13.0603 7.39258 12.9524 7.19887L12.8541 7.02251C12.4741 6.34084 12.2841 6 12 6Z" fill="#1C274C"/>
        </svg>}   
      </div>
      <span className='text-9xl text-center font-extrabold underline underline-offset-8 drop-shadow-md'>{group.points}</span>
      <div className='absolute bottom-28 w-[264px] flex flex-col items-center'>
        <h2 className="text-4xl font-bold h-[60px] truncate tracking-wider w-[264px]">{group.title}</h2>
        <div className='text-sm italic text-slate-500 text-pretty text-center
        border-t-4 border-gray-800 line-clamp-3'>{group.players.join(', ')}</div>
      </div>
    </div>
  )
}

export default Group