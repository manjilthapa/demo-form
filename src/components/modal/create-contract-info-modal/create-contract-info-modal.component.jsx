import React, {useState} from 'react'

import {DialogShadow, Dialog, DialogBanner, DialogCloseButton, DialogContent, DialogBannerName} from '../modal.styles'
import FormInput from '../../form-input/form-input.component'
import CustomButton from '../../custom-button/custom-button.component'
import CustomDropDown from '../../custom-dropdown/custom-dropdown.component'
import CustomDatepicker from '../../custom-datepicker/custom-datepicker.component';

const optionWhoPay = ["GE", "Institutionen"]
const optionAuthorityRequirement = ["NEJ", "JA"]
const CreateContractInfoModal= ({visible, setVisible}) => {

    const[contract, setContract] = useState({
        address: '',
        institution: '',
        installation: '',
        supplier: '',
        authority_requirement: '',
        annual_contract_amount:'',
        start_date: '',
        end_date: '',
        who_pay: '',
        comment: ''
    })

    console.log(visible)
    const {address, institution, installation, supplier, authority_requirement, annual_contract_amount, start_date, end_date, who_pay, comment } = contract

    const handleChange = event => {
        console.log(event.target.value)
        const {value, name} = event.target
        setContract({...contract, [name]: value})
        event.preventDefault();
    }

    const onStartDateChange = data => {
        console.log(data)
        setContract({...contract, start_date: data})
    }

    const onEndDateChange = data => {
        console.log(data)
        setContract({...contract, end_date: data})
    }

    const handleSubmit = () => {
        close()
    }

    const close = () => {
        setVisible(false)
    }

    /*
    <div className="group">
                            <DatePicker name="start_date" wrapperClassName="form-date-wrapper" value={start_date} className="form-date" locale={da} dateFormat="dd/MM/yyyy" selected={start_date} onChange={onDateHandleChange} />
                            {console.log({start_date})}{<label className={`${start_date !== "" ? 'shrink' : ''} form-input-label`}>Start Dato</label>}
                        </div>
    */
    if(!visible) return null

    return (
        <>
            <DialogShadow />
            <Dialog>
                <DialogBanner>
                    <DialogBannerName>INSERT NEW DATA</DialogBannerName>
                    <DialogCloseButton onClick={close}>&#10005;</DialogCloseButton>
                </DialogBanner>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <FormInput name="address" type="text" value={address}  handleChange={handleChange} label="Address" required />
                        <FormInput name="institution" type="text" value={institution}  handleChange={handleChange} label="Institution" required />
                        <FormInput name="installation" type="text" value={installation}  handleChange={handleChange} label="Anlæg" required />
                        <FormInput name="supplier" type="text" value={supplier}  handleChange={handleChange} label="Entreprenør/Leverandør" required />
                        <CustomDropDown name="authority_requirement" value={authority_requirement} handleChange={handleChange} label="Myndighedskrav" options={optionAuthorityRequirement}/>
                        <FormInput name="annual_contract_amount" type="number" value={annual_contract_amount}  handleChange={handleChange} label="Kontraktsum, årlig" required />
                        <CustomDatepicker name="start_date" value={start_date} handleChange = {onStartDateChange} selected={start_date} label="Start Dato"/>
                        <CustomDatepicker name="end_date" value={end_date} handleChange = {onEndDateChange} selected={end_date} label="Slut Dato"/>
                        <CustomDropDown name="who_pay" value={who_pay} handleChange={handleChange} label="Hvem betaler" options={optionWhoPay}/>
                        <FormInput name="comment" type="textarea" value={comment}  handleChange={handleChange} label="Bemærkninger" required />
                        <CustomButton type="submit">Create</CustomButton>

                    </form>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default CreateContractInfoModal
