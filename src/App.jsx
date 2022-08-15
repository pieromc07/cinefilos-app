import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Movies } from './pages/Movies/Movies'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movies' element={<Movies />} />
			</Routes>
		</>
	)
}

export default App
