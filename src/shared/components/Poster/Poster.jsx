import React from 'react'

import './Poster.css'

export const Poster = ({ title, image }) => {
	return (

		<img
			className="movie"
			src={image}
			alt={title}
		/>
	)
}
