import React from 'react'
import './style.css'

export default ({background, text, borderColor, size}) => {
    return(
        <button style={{background:background, borderColor:borderColor}} className={`btn ${size}`}>{text}</button>
    )
}