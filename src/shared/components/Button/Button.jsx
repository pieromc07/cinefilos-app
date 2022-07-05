import React, { useEffect } from 'react'

import './Button.css'

export const Button = ({text, status}) => {

    useEffect(() => {
        if(status){
            document.querySelector('.button').classList.add('active')
        }else
        {
            document.querySelector('.button').classList.remove('active')
        }

    }
    , [status])


  return (
    <button className="button">
        {text}
    </button>
  )
}
