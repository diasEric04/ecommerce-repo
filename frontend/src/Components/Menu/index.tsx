import {Link} from 'react-router-dom'
import { Component } from '../../types'

export const Menu: Component = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/signin'>Logar</Link>
            <Link to='/signup'>Crie uma conta</Link>
        </nav>
    )
}