import styled from "styled-components";

export default function About() {
    return (
        <StyledAbout>
            <p>
                AAAAAAAAAAAAAAAAAAAAAA D AS D SA DA SDDSA D AS D AS DA SD ASD AS D A SD A S DSA DSA D AS DAS D AS D AS D ASDAS DA SD ASDA D AS D AS D AS DAS D AS D AS DAS D
            </p>
            <p>

            </p>
        </StyledAbout>            
    )
}

const StyledAbout = styled.div`
    margin: auto auto;
    width: 80%;
    height: 80%;
    word-wrap: break-word;
    padding: 30px;
    background-color: #101010;
    border-radius: 15px;
    color: #999999;
    text-align: center;
    overflow-y: scroll;
    &::-webkit-scrollbar {  
                margin: 5px;
                width: 12px;
                border-radius: 15px;
                background-color: #191919;
            }
   
            &::-webkit-scrollbar-thumb {
                background-color: white;
                border-radius: 15px;
                :hover {
                    background-color: #D3D3D3;
                }
            }

`