import React from 'react'
import LinkCard from './LinkCard'
import pass from '../images/pass.jpg'

function Profile() {
  return (
    <div className='flex-col w-[100%] align-middle'>
        <div className='flex-col justify-center items-center w-[100%] mb-14'>
            <div className='flex justify-center profle-image mb-6'>
                <img className='w-[88px] h-[88px] rounded-full' src={pass} alt='profile' id='profile__img'/>
            </div>
            <h2 className='flex justify-center font-bold text-lg' id="twitter">adecode</h2>
            <h2 className='flex justify-center font-bold text-lg hidden' id="slack">adecode</h2>
        </div>
        <div className='flex-col box-border px-36'>
            <LinkCard title='Twitter Link' id='btn__zuri' link='https://training.zuri.team/'/>
            <LinkCard title='Zuri Team'/>
            <LinkCard title='Zuri Books'/>
            <LinkCard title='Python Books'/>
            <LinkCard title='Background Check for Coders'/>
            <LinkCard title='Design Books'/>
        </div>
    </div>
  )
}

export default Profile