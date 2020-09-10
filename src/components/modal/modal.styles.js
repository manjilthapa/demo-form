import styled from 'styled-components'

export const DialogShadow = styled.div`
    position:fixed;
    height:100%;
    width:100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 2;
`

export const Dialog = styled.div`
    width: 690px;
    max-height: calc(100% - 80px);
    background-color:white;
    position:fixed;
    top: 40px;
    z-index:5;
    left: calc(50% - 345px);
    display: flex;
    flex-direction: column;
    border-radius: 5px;

`

export const DialogBanner = styled.div`
    box-shadow: 0px 0px 10px 1px grey; 
    display: flex;
    justify-content:center;
    height:4rem;
`

export const DialogBannerName = styled.div`
    font-size: 30px;
    padding: 12px;
`
export const DialogContent = styled.div`
    box-shadow: 0px 0px 2px 0px grey;
    overflow: auto;
    min-height: 70px;
    padding: 0 40px;
    padding-bottom: 80px;
`

export const DialogCloseButton = styled.div`
    position: absolute;
    cursor: pointer;
    right: 0;
    right: 25px;
    top: 20px;
    font-weight:700;
    cursor: pointer;

    &:hover{
        color:Red;
    }
`