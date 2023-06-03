import React from 'react'

const Card = (prop) => {
    return (
        <div id='msj'>
            <span className='msj'>tu mascota es un: {prop.animal} </span>
            <span className='msj'>tu mascota se llama: {prop.nombre} </span>
        </div>
    )
}

export default Card