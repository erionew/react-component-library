import React from 'react';
import './Button.css'


const Button = (props) => {

    let classList = '';
    let icon = ''


    // listing out all the types of buttons
    let types = ['primary', 'primary-hover', 'primary-outline', 'primary-disabled',
                 'success', 'success-hover', 'success-outline', 'success-disabled',
                 'warning', 'warning-hover', 'warning-outline', 'warning-disabled', 
                 'danger', 'danger-hover', 'danger-outline', 'danger-disabled',
                 'default', 'default-hover', 'default-outline', 'default-disabled']


    //this checks to see if a components type prop matches the anything in the types array. If so it makes the type will become added to the buttons class name.
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    //this checks to see if a component contains the 'large' prop. IF it does, the button-large class will be added to the button. 
    if (props.large) {
        classList += ` button-large` 
    }
    //this checks for an icon prop. If the component has an icon, it will be displayed on the button. If not, the button will display without an icon. 
    if (props.icon){
        icon += props.icon
        return <button className={classList}><img className='icon'src={icon}></img>{props.label}</button>
    } else {
        return <button className={classList}>{props.label}</button>
    }

}

export default Button; 