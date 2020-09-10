import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import da from 'date-fns/locale/da';

import './custom-datepicker.styles.scss'

const CustomDatepicker = ({handleChange, selected, label, ...otherProps}) => (
    <div className="form-date-group">
        <DatePicker wrapperClassName="form-date-wrapper" className="form-date" locale={da} dateFormat="dd/MM/yyyy" selected={selected}  onChange={handleChange} />
        {console.log(otherProps.value === "")}
        {label ? (<label className={`${otherProps.value !== "" ? 'shrink' : ''} form-date-label`}>{label}</label>):null}
    </div> 
)

export default CustomDatepicker