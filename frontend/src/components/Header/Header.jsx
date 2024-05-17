import { Link } from 'react-router-dom';
import './css/Header.css';

export default function Header() {
    return (
        <header className='Header'>
            <Link to='/' className='Header_logo'>PREFEITURA MUNICIPAL</Link>
            <Link to='/cadastrar' className='Header_register'>Cadastrar</Link>
            <Link to='/alterar' className='Header_delete'>Alterar/Deletar</Link>
        </header>
    )
}