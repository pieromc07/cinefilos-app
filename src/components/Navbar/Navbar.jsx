import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import logo from '../../logo.svg'
import { BaseInput } from '../../shared/components/BaseInput/BaseInput'
import './Navbar.css'



export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)

        isOpen ?
            document.getElementById('collapse').classList.add('closed')
            :
            document.getElementById('collapse').classList.remove('closed')
    }

    return (
        <>
            <div className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="logo" />
                    <div className="navbar-brand">
                        <strong>Cinefilos</strong>
                        <div className="brand_bar"></div>
                    </div>
                </div>
                <div className="navbar-menu" id='navbarMenu'>
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
                </div>
            </div>

            <div className="navbar-menu" id='navbarMenuMobile'>
                <div className="menu-title">
                    <h3 className="title_text">Detalles del Cine</h3>

                    <button className="title_icon" onClick={handleOpen}>
                        {
                            isOpen ? <FaAngleUp /> : <FaAngleDown />
                        }
                    </button>

                </div>
                <div className="menu-content closed" id='collapse'>
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
                </div>
            </div>
        </>

    )
}
