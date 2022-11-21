import styled from "styled-components"

export const StyledCard = styled.div`
    padding: 14px;
    margin: 25px 0 25px 0;
    border: 1px solid white;
    height: 120px;
    width: 390px;
    border-radius:15px;
    margin-right: 10px;
`

export const StyledCards = styled.div`
    display: flex;
    grid-row: 2 / 4;    
    grid-column: 2;
    border-left: 1px solid white;
    height: 100%;
    max-height: 700px;
    margin: auto 0;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
    `
export const OutterStyledDiv = styled.div`
    overflow-y: scroll;
    max-height:100%;
    &::-webkit-scrollbar {
        margin: 5px;
        width: 10px;
        border-radius: 15px;
        background-color: none;
    }
    &::-webkit-scrollbar-thumb {
        padding: 5px;
        background-color: white;
        border-radius: 15px;
        :hover {
            background-color: #D3D3D3;
        }
    }
    
    /* max-width: '100%'; */
`