import React from 'react'

export default function TextInput(props) {

    let classList = ''

    let sizes = ['small', 'medium', 'large']

    if (sizes.includes(props.size)) {
        classList += ` input--${props.size} `
    }

    if(props.label){
       return (
            <div className={`container--text-input`}>
                <label for="text">{props.label}</label>
                <input className={classList} type='Text' id='text' placeholder={props.placeholder}></input>
            </div>
        )
    } else {
        return <input type='Text' id='text' placeholder={props.placeholder}></input>
    }
}
