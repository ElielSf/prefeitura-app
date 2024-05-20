import './css/Header.css';

import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='Header'>
            <Link to='/' className='Header_logo'>PREFEITURA MUNICIPAL</Link>
            <Link to='/cadastrar' className='Header_register'>Cadastrar</Link>
            <Link to='/controle' className='Header_control'>Alterar/Deletar</Link>
        </div>
    )
}
