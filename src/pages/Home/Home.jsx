import React from 'react'

import { movies } from '../../data/Movies'
import { LinkIcon } from '../../shared/components/LinkIcon/LinkIcon'
import { Poster } from '../../shared/components/Poster/Poster'

import icon from '../../assets/img/claqueta.svg'
import './Home.css'


const Home = () => {
	return (
		<>
			<div className="home-container">
				<div className="home-title">
					<h1 className="title">Cartelera</h1>
					<p className="subtitle">Estas son todas las peliculas disponibles.</p>
				</div>

				<div className="home-content">
					{movies.map(movie => (
						<div className="movie-card" key={movie.id} id={movie.id}>
							<Poster title={movie.title} image={movie.image} />
						</div>
					))}
				</div>
				<LinkIcon text={"ver mas peliculas"} icon={icon} to={'/movies'} />
			</div>
		</>
	)
}

export default Home