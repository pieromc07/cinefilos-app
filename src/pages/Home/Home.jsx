import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

import { movies } from '../../data/Movies'
import { Poster } from '../../shared/components/Poster/Poster'

import './Home.css'


const Home = () => {
	return (
		<>
			<Navbar />
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
			</div>
		</>
	)
}

export default Home