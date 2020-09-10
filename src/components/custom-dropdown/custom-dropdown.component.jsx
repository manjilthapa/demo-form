import React from 'react'
import './custom-dropdown.styles.scss'

const CustomDropDown = ({handleChange, label, options, ...otherProps}) => (

    <div className="from-select-group">
        <select className="form-select" onChange={handleChange} {...otherProps}>
            <option></option>
            {
                options.map(option => (
                <option key={Math.random()} value={option}>{option}</option>
                ))
            }

        </select>
        {label ? (<label className={`${otherProps.value.length ? 'shrink' : ''} form-select-label`}>{label}</label>):null}
        
    </div> 
)

export default CustomDropDown