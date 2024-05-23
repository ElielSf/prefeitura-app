import './css/Control.css';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaUserCog } from "react-icons/fa";
import { SlExclamation } from "react-icons/sl";

export default function Control() {
    const [moradores, setMoradores] = useState([]);
    const [selecionarCard, setSelecionarCard] = useState();
    const [atualizar, setAtualizar] = useState(false);
    
    useEffect(() => {
        const dataFetch = async () => {
            try {
                const response = await fetch('http://localhost:3000/exibir/moradores', {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
                const json = await response.json();
                setMoradores(json);
                console.log(json);
                atualizarTela();
            } catch (err) {
                console.log(err);
            }
        }
        dataFetch();
    }, [atualizar]); 

    const atualizarTela = () => {
        setAtualizar(!atualizar);
    }

    const handleClick = (id) => {
        setSelecionarCard(selecionarCard === id ? null : id);
    }

    const handleDelete = async () => {
        if (selecionarCard) {
            try {
                const response = await fetch(`http://localhost:3000/moradores/${selecionarCard}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
                const json = await response.json();
                console.log(response);
                console.log(json);
                setSelecionarCard(null);
                atualizarTela();
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div className='Control'>
            <h2 className='Control_title'>Administração de cadastro</h2>
            <div className='Control_box'>
                {moradores.map((morador) => {
                    return (
                        <div className={selecionarCard === morador.id_morador ? ('Control_card-selected') : ('Control_card-unselected')} key={morador.id_morador} onClick={() => handleClick(morador.id_morador)}>
                            <h3 className='card_data'>ID: {morador.id_morador}</h3>
                            <h3 className='card_data'>CPF: {morador.cpf_morador}</h3>
                            <h3 className='card_data'>Nome Completo: {morador.nome_morador}</h3>
                            <h3 className='card_data'>Data de nascimento: {morador.data_nascimento_morador}</h3>
                            <h3 className='card_data'>Gênero: {morador.genero_morador}</h3>
                            <h3 className='card_data'>Estado Civil: {morador.estado_civil_morador}</h3>
                            <h3 className='card_data'>DDD: {morador.ddd_endereco}</h3>
                            <h3 className='card_data'>Telefone: {morador.telefone_morador}</h3>
                            <h3 className='card_data'>Email: {morador.email_morador}</h3>
                            <h3 className='card_data'>CEP: {morador.cep_morador}</h3>
                        </div>
                    )
                })}
            </div> 
            <div className='Control_button'>
                <button className={selecionarCard ? 'Control_button-del' : 'Control_button-del-disable'} onClick={handleDelete}><SlExclamation /> Apagar</button>
                <Link className={selecionarCard ? 'Control_button-mod' : 'Control_button-mod-disable'} to='/cadastrar' state={selecionarCard}><FaUserCog />Modificar</Link>          
            </div>
        </div>
    )
}
