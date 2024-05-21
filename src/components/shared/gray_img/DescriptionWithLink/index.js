import React from 'react'

const DescriptionWithLink = (props) => {
    if(!props.description)
        return null

    if(props.link){
        return (
            <div>
                <p>{props.description}</p>
                <p>
                    <a target="_blank" href={props.link}>Para mais informações, clique aqui!</a>
                </p>
            </div>
        )
    }else{
        return (
            <div>
                <p><u>{props.description}</u></p>
            </div>
        )
    }
}

export default DescriptionWithLink