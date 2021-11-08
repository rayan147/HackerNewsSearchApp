import React from 'react'
import { Button } from './Button'

const ButtonGroup = () => {
    return (
        <>
         <Button name='Search' where='/search'/>  
         <Button name='History' where='/history'/>  
        </>
    )
}


export default ButtonGroup
