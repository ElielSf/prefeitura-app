import './css/Error.css'

export default function Error() {
    
    const returnPage = () => {
        history.back();
    }
    
    return (
        <div className='Error' onClick={returnPage}>
            <h1 className='Error_title'>Erro!</h1>
            <h3 className='Error_text'>Houve um erro na tentativa de abrir está página, tente novamente mais tarde.</h3>
            <br />
            <p className='Error_text'>Clique para retornar.</p>
        </div>
   ) 
}