import './css/Header.css';

import { TiUserAdd } from "react-icons/ti";
import { SlLock } from "react-icons/sl";

import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='Header'>
            <Link to='/' className='Header_logo'>PREFEITURA MUNICIPAL</Link>
            <Link to='/cadastrar' className='Header_register'><TiUserAdd /> Cadastrar</Link>
            <Link to='/controle' className='Header_control'><SlLock /> Alterar/Deletar</Link>
        </div>
    )
}
