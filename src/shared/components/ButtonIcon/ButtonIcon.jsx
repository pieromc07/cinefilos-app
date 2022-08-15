import React from 'react'

import './ButtonIcon.css'

export const ButtonIcon = ({ text, icon }) => {
	return (
		<button className='button'>
			<img className='icon' src={icon} alt={`icon ${text}`} />
			<span>{text}</span>
		</button>
	)
}
