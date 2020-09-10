import React from 'react'
import CreateContractInfoModal from '../modal/create-contract-info-modal/create-contract-info-modal.component'
import useVisible  from '../../hooks/useVisible'

const ContractList = () => {
    const visible = useVisible()

    return (
        <div>
            <CreateContractInfoModal {...visible}/>
            <button onClick = {() => visible.setVisible(true)}>Insert Contract Information</button>
            <h1>Contract List</h1>
        </div>
    )
}

export default ContractList
