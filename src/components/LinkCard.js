import React from 'react'

function LinkCard({title}) {
  return (
    <div className='flex justify-center items-center bg-gray h-[76px] w-[100%] mb-6 rounded-lg'>
        <h3 className='font-medium text-lg text-text_color'>{title}</h3>
    </div>
  )
}

export default LinkCard