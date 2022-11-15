import styled from "styled-components";

export default function Cards() {
    return(
        <StyledCards> 
        </StyledCards>
    )
}

export const StyledCards = styled.div`
    grid-area: cards;
    margin: 0px;
    display: block;
    height: 300px;
    width: 100vw;
    max-width: 100%;
    /* background-image: url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: #ffffff;
    div {
        display: flex;
        justify-items: left;
        border: 2px solid red;
    }
`
