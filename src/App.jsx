import React, { useState } from 'react'
import Form from './Components/Form'
import Card from './Components/Card'
import './App.css'

const App = () => {

const [cardIsActive,setCardIsActive] = useState(false)
const [animal,setAnimal] = useState("")
const [nombre,setNombre] = useState("")

function handler(nombre,animal){
    if(nombre && animal){
        setAnimal(animal)
        setNombre(nombre)
        setCardIsActive(true)
    }else{
        setCardIsActive(false)
    }
}

  return (
    <div>
        <Form handler={handler}/>
        {cardIsActive ? <Card animal={animal} nombre={nombre}/> : undefined}
    </div>
  )
}


export default App
