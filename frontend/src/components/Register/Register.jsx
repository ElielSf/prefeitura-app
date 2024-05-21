import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './css/Register.css';

export default function Register() {
    const [error, setError] = useState(false);
    const [type, setType] = useState('text');
    const { state } = useLocation();
    const [dadosCadastro, setDadosCadastro] = useState({
        nome_morador: '',
        cpf_morador: '',
        data_nascimento_morador: '',
        genero_morador: '',
        estado_civil_morador: '',
        telefone_morador: '',
        email_morador: '',
        cep_morador: '',
        estado_endereco: '',
        cidade_endereco: '',
        bairro_endereco: '',
        logradouro_endereco: '',
        ddd_endereco: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosCadastro(prevState => ({ ...prevState, [name]: value}));
    }

    const handleAdress = async () => {
        const data = await fetch(`https://viacep.com.br/ws/${dadosCadastro.cep_morador}/json/`);
        const adress = await data.json();

        if (adress.erro & adress.erro == true) {
            setError(true);
        } else {
            setError(false);
            setDadosCadastro(prevState => ({ 
                ...prevState, 
                estado_endereco: adress.uf,
                cidade_endereco: adress.localidade,
                bairro_endereco: adress.bairro,
                logradouro_endereco: adress.logradouro,
                ddd_endereco: adress.ddd
            }));
            console.log(dadosCadastro);
        }
    }

    const handleSubmit = async (e) => {
        if (state !== null) {
            try {
                e.preventDefault();
                await handleAdress();
    
                const response = await fetch(`http://localhost:3000/moradores/${state}`, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(dadosCadastro)
                });
                const json = await response.json();
                console.log(json);
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                e.preventDefault();
                await handleAdress();
    
                const response = await fetch('http://localhost:3000/cadastrar/moradores', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(dadosCadastro)
                });
                const json = await response.json();
                console.log(json)
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div className='Register'>
            <h1 className='Register_title'>{state ? (`Modificação de Morador - ID: ${state}`) : ('Cadastro de Morador')}</h1>
            {error && (<h2 className='Register_error'>Erro no CEP digitado</h2>)}
            <form className='Form' id='form-register' onSubmit={handleSubmit}>
                <input type='text'
                className='Form_input' 
                name='nome_morador'
                value={dadosCadastro.nome_morador} 
                onChange={handleChange} 
                placeholder='Nome Completo'
                title='Campo de nome completo'
                required/>

                <input type='text'
                className='Form_input' 
                name='cpf_morador'
                value={dadosCadastro.cpf_morador} 
                onChange={handleChange} 
                placeholder='CPF (Formato: 12345678987)'
                title='Campo de cpf'
                maxLength='11'
                required/>

                <input type={type}
                className='Form_input' 
                name='data_nascimento_morador'
                value={dadosCadastro.data_nascimento_morador} 
                onChange={handleChange} 
                placeholder='Data de Nascimento'
                title='Campo de data de nascimento'
                onFocus={() => setType('date')} 
                onBlur={() => setType('text')}
                required/>

                <input type='text'
                className='Form_input' 
                name='genero_morador'
                value={dadosCadastro.genero_morador} 
                onChange={handleChange} 
                placeholder='Gênero'
                title='Campo de gênero'
                required/>

                <input type='text'
                className='Form_input' 
                name='estado_civil_morador'
                value={dadosCadastro.estado_civil_morador} 
                onChange={handleChange} 
                placeholder='Estado Civil'
                title='Campo de estado civil'
                required/>

                <input type='tel'
                className='Form_input' 
                name='telefone_morador'
                value={dadosCadastro.telefone_morador} 
                onChange={handleChange} 
                placeholder='Telefone (Formato: 11-32222-3333'
                title='Campo de telefone'
                pattern='[0-9]{2}-[0-9]{5}-[0-9]{4}'
                required/>

                <input type='email'
                className='Form_input' 
                name='email_morador'
                value={dadosCadastro.email_morador} 
                onChange={handleChange} 
                placeholder='Email'
                title='Campo de email'
                required/>

                <input type='text'
                className='Form_input' 
                name='cep_morador'
                value={dadosCadastro.cep_morador} 
                onChange={handleChange} 
                placeholder='CEP (Formato: 1234567)'
                title='Campo de cep'
                maxLength='8'
                required/>
            </form>
            <button className='Form_button' type='submit' form='form-register'>Enviar</button>
            {error == true ? (<h3 className='error-message'>Erro no CEP digitado</h3>) : (null)}
        </div>
    )
}
