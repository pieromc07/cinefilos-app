import React from 'react'

import './BaseInput.css'

export const BaseInput = ({ name, options }) => {
	return (
		<div className="base-input">
			<label htmlFor={name}>{name}</label>
			<select name={name} id={name}>
				{options.map(({ option, index }) => (
					<option key={index} value={index}>
						{option}
					</option>
				))}
			</select>
		</div>
	)
}
