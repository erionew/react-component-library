import React from 'react'

export default function Select(props) {
    let classList = ''

    let sizes = ['small', 'medium', 'large']

    if (sizes.includes(props.size)) {
        classList += ` select--${props.size} `
    }

    if(props.outlined){
        classList += 'outlined '
    }

    if(props.filled){
        classList += 'filled '
    }

    return(
        <div>
            <select className={classList}>
                <option value='Select'>Select</option>
            </select>
        </div>
    )

}
