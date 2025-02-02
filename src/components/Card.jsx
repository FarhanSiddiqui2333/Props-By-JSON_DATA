import React from 'react'

const Card = (props) => {
    return (
        <div className='parent bg-white h-auto w-80 p-4 text-slate-900 rounded-lg'>

            <div className="top flex items-center justify-between">
                <i className="fa-solid fa-angle-left text-sm"></i>
                <h1 className='text-md font-extrabold'>{props.username}</h1>
                <i className="fa-solid fa-ellipsis text-xs"></i>
            </div>

            <div className="profile flex items-center justify-around mt-2">
                <div className="img rounded-full mr-8">
                    <img src={props.photo} alt="" className='border-2 border-white rounded-full w-full h-full' />
                </div>
                <div className="follower flex gap-5">
                    <p style={{ lineHeight: '16px', fontSize: '13px', textAlign: 'center' }}><span className='block font-extrabold'>{props.posts}</span>Post</p>
                    <p style={{ lineHeight: '16px', fontSize: '13px', textAlign: 'center' }}><span className='block font-extrabold'>{props.followers}</span>Follower</p>
                    <p style={{ lineHeight: '16px', fontSize: '13px', textAlign: 'center' }}><span className='block font-extrabold'>{props.following}</span>Following</p>
                </div>
            </div>

            <div className="detail mt-1">
                <h2 className='font-bold text-sm'>{props.name}</h2>
                <p className='text-xs pr-4'>{props.desc}</p>
            </div>

            <div className="btns flex items-center justify-between mt-5">
                <button className='px-8 py-1 rounded bg-sky-400 text-white font-semibold text-sm'>Follow</button>
                <button className='px-8 py-1 rounded bg-slate-200 font-semibold text-sm'>Message</button>
                <i className="fa-solid fa-user-plus border px-2 py-1 text-sm text-slate-500 rounded"></i>
            </div>

            <div className="others flex items-center justify-between my-5">

                <div className='text-center w-12 h-12 p-0.5 rounded-full'>
                    <img src={props.oth_pro[0].profile} alt="" className='h-full w-full border border-white rounded-full' />
                    <p style={{ fontSize: '9px', padding: '5px 0px', lineHeight: '12px' }}>{props.oth_user[0].userName}</p>
                </div>

                <div className='text-center w-12 h-12 p-0.5 rounded-full'>
                    <img src={props.oth_pro[1].profile} alt="" className='h-full w-full border border-white rounded-full' />
                    <p style={{ fontSize: '9px', padding: '5px 0px', lineHeight: '12px' }}>{props.oth_user[1].userName}</p>
                </div>

                <div className='text-center w-12 h-12 p-0.5 rounded-full'>
                    <img src={props.oth_pro[2].profile} alt="" className='h-full w-full border border-white rounded-full' />
                    <p style={{ fontSize: '9px', padding: '5px 0px', lineHeight: '12px' }}>{props.oth_user[2].userName}</p>
                </div>

                <div className='text-center w-12 h-12 p-0.5 rounded-full'>
                    <img src={props.oth_pro[3].profile} alt="" className='h-full w-full border border-white rounded-full' />
                    <p style={{ fontSize: '9px', padding: '5px 0px', lineHeight: '12px' }}>{props.oth_user[3].userName}</p>
                </div>
                
            </div>

        </div>
    )
}

export default Card
