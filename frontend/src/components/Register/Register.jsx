import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './css/Register.css';

export default function Register() {
    const [type, setType] = useState('text');
    const [success, setSuccess] = useState(false);
    //variável que caso seja diferente de null faz uma requisição do tipo put
    const { state } = useLocation();
    const [dadosCadastro, setDadosCadastro] = useState({
        nome_morador: '',
        cpf_morador: '',
        data_nascimento_morador: '',
        genero_morador: '',
        estado_civil_morador: '',
        telefone_morador: '',
        email_morador: '',
        cep_morador: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosCadastro(prevState => ({ ...prevState, [name]: value}));
    }

    const handleSubmit = async (e) => {
        console.log('state:' + state);
        if (state === null) {
            try {
                e.preventDefault();
    
                const response_post = await fetch('http://localhost:3000/cadastrar/moradores', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(dadosCadastro)
                });
                const json_post = await response_post.json();
                console.log(json_post);
                const json = await response.json();
                console.log(json);
                setSuccess(true);
            } catch (err) {
                console.log(err);
                setSuccess(false);
            }
        } else {
            try {
                e.preventDefault();
    
                const response_put = await fetch(`http://localhost:3000/moradores/${state}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dadosCadastro)
                });
                const json_put = await response_put.json();
                console.log(json_put);
                const json = await response.json();
                console.log(json);
                setSuccess(true);
            } catch (err) {
                console.log(err);
                setSuccess(false);
            }
        }
        
    }

    return (
        <div className='Register'>
            <h1 className='Register_title'>{state ? (`Modificação de Morador - ID: ${state}`) : ('Cadastro de Morador')}</h1>
            {(state === null && success) && (<h5>Cadastro feito com sucesso!</h5>)}
            {(state !== null && success) && (<h5>Modificação feita com sucesso!</h5>)}
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
                placeholder='Telefone (Formato: 75-32222-3333)'
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
        </div>
    )
}
