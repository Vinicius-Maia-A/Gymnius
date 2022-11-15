import Menu from '../src/components/Menu'
import Main from '../src/components/Main'
import { CSSReset } from '../src/components/CSSReset'
import Cards  from '../src/components/Cards'
import styled from 'styled-components'

function Home () {
    return (
        <>
            <CSSReset />
            <StyledContainer> 
                {/* <Main />
                <Cards /> */}
                <Menu />
                <main>Main</main>
                <aside>Cards</aside>
            </StyledContainer>
        </>
    )
}

const StyledContainer = styled.div`
    display: grid;
    grid-template-rows: 65px 1fr;   
    grid-template-columns: 1fr 300px;
    color: black;
    background-color: aquamarine;
    height: 100vh;
    width: 100vw;
    
    main {
        background-color: red;
        grid-row: 2 / 3;
        grid-column: 1 / 2;
    }
    aside {
        background-color: green;
        grid-row: 2 / 3;
        grid-column: 2 / 3;
    }
`


export default Home

