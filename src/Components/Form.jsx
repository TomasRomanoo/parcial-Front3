import React, { useState } from 'react'


// eslint-disable-next-line react/prop-types
const Form = ({ handler }) => {

const[animal,setAnimal] = useState("")
const[nombreMascota,setNombreMascota] = useState("")
const[err,setErr] = useState("")

function handlerSubmit(e){
    e.preventDefault()

    const data = {
        animal: animal.trim(),
        nombre: nombreMascota,
    }

    if(data.animal.length<3 || data.nombre.length<6){
        setErr('debe contener mas caracteres')
        handler()
    }else{
        setErr('')
        handler(data.animal,data.nombre)
    }
    setAnimal("")
    setNombreMascota("")
} 

    return (
        <div>
            <form id="form" action="" onSubmit={handlerSubmit}>

                <label htmlFor="">¿Que animal es tu mascota?</label>
                <input type="text"
                value={animal}
                onChange={(e)=>setAnimal(e.target.value)}
                />

                <label htmlFor="">¿Cual es su nombre?</label>
                <input type="text"
                value={nombreMascota}
                onChange={(e)=>setNombreMascota(e.target.value)}
                />

                <button type='submit'>ENVIAR</button>

                {err && <span id='msjErr'>{err}</span>}
                
            </form>
        </div>
    )
}

export default Form