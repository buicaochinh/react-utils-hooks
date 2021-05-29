import React, { MouseEvent } from 'react'
import { useFormState, useForm } from 'react-hook-form'

interface props {
    login: any
}

const Login = ({ login }: props) => {

    function handleSubmit(e: MouseEvent) {
        e.preventDefault()
        login({ username: 'buicaochinh11', password: '12345678!@'})
    }
    return <>
        Hello Chinh
        <form>
            <input type="button" value='click' onClick={(e) => handleSubmit(e)}/>
        </form>
    </>
}

export default Login
