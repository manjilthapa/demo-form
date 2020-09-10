import {useState} from 'react'

const useVisible = () => {
    const [visible, setVisible] = useState(false);
    return{
        visible,
        setVisible
    }
    
}

export default useVisible