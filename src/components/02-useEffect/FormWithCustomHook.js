import React from 'react'
import { useEffect , useState} from 'react'
import { useForm } from '../../hooks/useForm'
import './effects.css'


export const FormWithCustomHook = () => {


    const [ values , handleInputChange , setValues ] = useForm({ name:'' , email: '' , password: '' })
    
    const { name , email , password} = values


    const handleSubmit = (e) => {
        e.preventDefault()

        console.log( values )

        setValues({ name:'' , email: '' , password: '' })
    }

    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>useEffect</h1>
            <hr/>


            <div className='form-group'>
                <input 
                    type='text' 
                    name='name' 
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                />
                
            </div>

            <div className='form-group'>
                <input 
                    type='text' 
                    name='email' 
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                />
                
            </div>

            
            <div className='form-group'>
                <input 
                    type='text' 
                    name='password' 
                    className='form-control'
                    placeholder='*********'
                    value={ password }
                    onChange={ handleInputChange }
                />
                
            </div>


            <button type='submit' className='btn btn-primary'>
                Guardar
            </button>



            
        </form>
    )
}
