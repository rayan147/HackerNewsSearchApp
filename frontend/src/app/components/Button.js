import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
export const Button = ({where,name}) => {
    const navigate = useNavigate();
    return (
        <>
         <button onClick={() => navigate(`${where}`)}>{name}</button>   
        </>
    )
}

Button.propTypes = {
    where: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}
