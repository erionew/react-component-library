import React from 'react';
import './Button.css'
// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {

    let classList = '';

    let types = ['primary', 'primary-hover', 'primary-outline', 'primary-disabled',
                 'success', 'success-hover', 'success-outline', 'success-disabled',
                 'warning', 'warning-hover', 'warning-outline', 'warning-disabled', 
                 'danger', 'danger-hover', 'danger-outline', 'danger-disabled',
                 'default', 'default-hover', 'default-outline', 'default-disabled']

    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }

    if (props.large) {
        classList += ` button-large` 
    }

    if (props.outline){
        classList += ` button-outline`
    }


    return <button className={classList}>{props.label}</button>
}

export default Button; 