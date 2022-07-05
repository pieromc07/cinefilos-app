import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../../logo.svg'
import { BaseInput } from '../../shared/components/BaseInput/BaseInput'
import { Button } from '../../shared/components/Button/Button'
import './Navbar.css'



export const Navbar = () => {
    const [toggler, setToggler] = useState(false)
    const handleToggler = () => {
        setToggler(!toggler)

        if (toggler) {
            document.querySelector('#navbarMenu').classList.remove('show')
        } else {
            document.querySelector('#navbarMenu').classList.add('show')
        }

    }


    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
                <div className="navbar-brand">
                    <strong>Cinefilos</strong>
                    <div className="brand_bar"></div>
                </div>
            </div>
            <button className="navbar-toggler" onClick={handleToggler}>
                <FaBars />
            </button>
            <div className="navbar-menu" id='navbarMenu'>
                <h3 className='menu_title'>Detalles del Cine</h3>
                <BaseInput name={'Ubicacion'}
                    options={[
                        { option: 'Trujillo', index: 1 },
                        { option: 'Lima', index: 2 },
                        { option: 'Arequipa', index: 3 },
                        { option: 'Cusco', index: 4 },
                        { option: 'Chiclayo', index: 5 },
                        { option: 'Tacna', index: 6 },
                        { option: 'Iquitos', index: 7 }
                    ]}
                />
                <BaseInput name={'Cines Cercanos'}
                    options={[
                        { option: 'Cineplanet', index: 1 },
                        { option: 'Cinemark', index: 2 },
                        { option: 'Cinepolis', index: 3 }
                    ]}
                />
                <BaseInput name={'Fecha'}
                    options={[
                        { option: '7 de Julio', index: 1 },
                        { option: '14 de Julio', index: 2 },
                        { option: '21 de Julio', index: 3 },
                        { option: '28 de Julio', index: 4 },
                        { option: '5 de Agosto', index: 5 }
                    ]}
                />
                <div className="menu_button">
                    <Button text={'Filtar'} status={true} bg="light"
                    />
                </div>
            </div>


        </div>
    )
}
