import React from 'react'
import './style.css'

const GrayImg = (props) => {
    return (
        <div>
            <img className={props.gray ? 'gray-img' : 'color-img'} src={props.img_url}></img>
        </div>
    )
}

export default GrayImg