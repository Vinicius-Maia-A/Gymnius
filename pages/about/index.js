import styled from 'styled-components'

export default function About() {
    return (
        <>
            <a href='../'>
                <StyledReturn >
                    <h1>return</h1>
                </StyledReturn>
            </a>
            <StyledContainer>


                <StyledAbout>
                    <p>
                        Existem diferentes maneiras de cuidar do seu corpo e da sua mente. Há pessoas que fazem por conta própria através de estudos e experimentos, pagam médicos, nutricionistas e academias, e outros utilizam até da cultura local. Porém, o objetivo final é o mesmo, cuidar de si.
                    </p>
                    <p>
                        Logo, o Gymnius não está para substituir nenhum dos métodos existentes, mas sim acrescentar uma outra alternativa ao leque de opções, ajudando aqueles que querem começar por algum lugar porém, não sabem por onde, ou que ainda não possuem condições de pagar uma academia, um personal trainer ou até mesmo um nutricionista.

                    </p>

                    <p>Este site é parte de um projeto da UNA - Contagem, UC: 'usabilidade e desenvolvimento web'! O nosso objetivo era a construção de um site funcional e a aplicação de conceitos de usabilidade para o melhor entendimento do conteúdo.</p>
                </StyledAbout>
            </StyledContainer>
        </>
    )
}

const StyledReturn = styled.div` 
    
    display: flex;
    position: relative;
    width: 130px;
    height: 40px;
    z-index: 10;
    background-color: #101010;
    top: 20px;
    left: 20px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;

    h1 {
        color: white;
        font-size: 20px;
        font-weight: 200;
    }
    
`

const StyledContainer = styled.div` 
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 80%;
    margin: auto auto;
    
`

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

    p {
        margin: 30px 10px
    }

`