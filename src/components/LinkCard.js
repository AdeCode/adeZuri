import React from 'react'
import {Link} from 'react-router-dom'

function LinkCard({title, id, link}) {
  return (
    <Link to={link} className='font-medium text-lg text-text_color flex justify-center items-center bg-gray h-[76px] w-[100%] mb-6 rounded-lg'
        id={id}
    >
        {title}
    </Link>

  )
}

export default LinkCard