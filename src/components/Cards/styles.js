import styled from "styled-components"

export const StyledCards = styled.div`
    display: flex;
    grid-row: 2 / 4;    
    grid-column: 2;
    border-left: 1px solid white;
    height: 100%;
    max-height: 700px;
    margin: 10px 0;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
    `
export const StyledCard = styled.div`
    display: flex;
    padding: 0;
    margin: 25px 0 25px 0;
    border: 1px solid white;
    height: 120px;
    width: 390px;
    border-radius:15px;
    margin-right: 10px;
    justify-content: center;
    align-items: end;
    overflow: hidden;
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