import { motion } from 'framer-motion'
import config from '../../../../../config.json'
import { StyledMain } from './styles'

export default function Main() {
    return(
        <StyledMain>
            <Carousel carousel={config.carousel} />
        </StyledMain>
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