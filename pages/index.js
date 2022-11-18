import Menu from '../src/components/Menu'
import Main from '../src/components/Main'
import { CSSReset } from '../src/components/CSSReset'
import Cards  from '../src/components/Cards'
import styled from 'styled-components'

import { motion } from 'framer-motion'
import config from '../config.json'

function Home () {

    return (
        <>
            <CSSReset />
            <StyledContainer> 
                <Menu />
                <StyledBanner className="banner" > 
                    <h2>Fazer o Banner</h2>
                </StyledBanner>
                <Main />
                {/* <StyledMain > 
                    <Carousel carousel={config.carousel} />
                </StyledMain> */}
                {/* div .app */}
                <aside>Cards</aside>
            </StyledContainer>
        </>
    )
}


function Carousel(props) {
    const carouselNames = Object.keys(props.carousel)
    return(
        <motion.StyledDivCarousel>
            {carouselNames.map( carouselName => {
                const itens = props.carousel[carouselName]

                return(
                    <motion.StyledDivInner>

                        {itens.map( journey => {
                            return(
                                <motion.div>
                                    <img src={journey.image} />
                                </motion.div>
                            )
                        })}
                        
                    </motion.StyledDivInner>
                )
            })}
        </motion.StyledDivCarousel>
    )
}

const StyledBanner = styled.div`
   
`
const StyledContainer = styled.div`
    display: grid;
    grid-template-rows: 0.8fr 1.6fr 7fr;   
    grid-template-columns: 2fr 1fr;
    color: black;
    background-color: aquamarine; 
    height: 100%;
    width: 100vw;
    
    main {
        /* background-color: black; */
        grid-row: 3;
        grid-column: 1;
    }
    aside {
        background-color: green;
        grid-row: 2 / 4;
        grid-column: 2;
    }

    .banner {
        grid-row: 2;
        grid-column: 1;
    }
`
export default Home

