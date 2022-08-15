import React from 'react'
import { Link } from 'react-router-dom'
import './LinkIcon.css'

export const LinkIcon = ({ text, icon, to}) => {
	return (
		<Link to={to} className='button'>
			<img className='icon' src={icon} alt={`icon ${text}`} />
			<span>{text}</span>
		</Link>
	)
}
