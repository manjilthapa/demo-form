import React, {useState} from 'react'
import {DialogShadow, Dialog, DialogBanner, DialogCloseButton, DialogContent, DialogBannerName} from '../modal.styles'
import FormInput from '../../form-input/form-input.component'
import CustomButton from '../../custom-button/custom-button.component'
import CustomDropDown from '../../custom-dropdown/custom-dropdown.component'

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
        comments: ''
    })

    console.log(visible)
    const {address, institution, installation, supplier, authority_requirement, annual_contract_amount, start_date, end_date, who_pay, comments } = contract

    const handleChange = event => {
        console.log(event.target.value)
        const {value, name} = event.target
        setContract({...contract, [name]: value})
        event.preventDefault();
    }

    const handleSubmit = () => {
        close()
    }

    const close = () => {
        setVisible(false)
    }

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
                        <FormInput name="annual_contract_amount" type="text" value={annual_contract_amount}  handleChange={handleChange} label="Kontraktsum, årlig" required />
                        <FormInput name="start_date" type="text" value={start_date}  handleChange={handleChange} label="Start dato" required />
                        <FormInput name="end_date" type="text" value={end_date}  handleChange={handleChange} label="Slut dato" required />
                        <CustomDropDown name="who_pay" value={who_pay} handleChange={handleChange} label="Hvem betaler" options={optionWhoPay}/>
                        <CustomButton type="submit">Create</CustomButton>

                    </form>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default CreateContractInfoModal
