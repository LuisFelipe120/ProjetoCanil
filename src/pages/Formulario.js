import React from 'react';
import {useState} from 'react';
import { useForm } from 'react-hook-form';
function Formulario() {
    const [lista, setLista] = useState([]) //[] define lista vazia
    const [formDados, setFormDados] = useState({nome: '', email: ''}); 
    //{} objeto JSON chave: valor ('' stringa vazia)
    //tudo na web eventos
    const{register, formState: {errors}, handleSubmit, reset} = useForm({
        defaultValues: {login: '', senha:''}
    })
    function handleChange(event){ //toda funcao recebe argumentos (arg1, arg2)
        console.log(event.target.value);
        setFormDados({...formDados,[event.target.name]: event.target.value} )
    }

    function onSubmit(data){
        console.log(data)
        setLista([...lista,data])
        reset({})
    }

    return(
        <section className='container'>
            <div className='formArea'>
                <form >
                    <label>Name</label>
                    <input type='text' name='nome' id='nome' onChange={event => handleChange(event)} value={formDados.nome}></input>
                    <label>E-mail:</label>
                    <input type='email' name='email' id='email'onChange={event => handleChange(event)} value={formDados.email}></input>
                    <input type='submit' value='enviar' />
                </form>
                {JSON.stringify(formDados)}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type='text' {...register('login', {required: true})} placeholder='Login'/>
                    {errors.login && <span>Campo obrigatório</span>}
                    <input type='password' {...register('senha', {required: true})} placeholder='senha'/>
                    {errors.senha && <span>Campo obrigatório</span>}
                    <button type='submit'>entrar</button>
                </form>
            </div>
            <ul>
            {lista.map(item => 
                <li>{item.login}-{item.senha}</li>
            )}
            </ul>
        </section>
    )

}
    export default Formulario;