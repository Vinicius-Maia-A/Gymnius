import { StyledMain } from './styles'
import { motion } from 'framer-motion'
import config from '../../../config.json'
import { useState, useEffect, useRef } from 'react' 

export default function Main() {
    return(
        <StyledMain>
            <Carousel carousel={config.carousel} />
        </StyledMain>
    )
}

//  note: A estilização das tags .motion estão no formato de propriedade temporariamente. Obrigado pela compreensão <3
function Carousel(props) {
    
    const carouselNames = Object.keys(props.carousel)
    const carousel = useRef()
    const [width, setWidth] = useState(0)
    useEffect(() => {
        console.log(carousel.current?.scrollWidth,carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth) 
    },[])
    return(
        <motion.div 
        className='carousel'
        whileTap={{ cursor: "grabbing"}}
        ref={carousel}
        style={{
            cursor: 'grab',
            overflow: 'hidden',    
        }}
        >
            {carouselNames.map( carouselName => {
                const itens = props.carousel[carouselName]

                return(
                    <motion.div 
                    className='inner' 
                    key={carouselName} 
                    drag="x"
                    dragConstraints={{ right: 0, left: -width}}
                    initial={{ x: 100}}
                    animate={{ x: 0}}
                    transition={{ duration: 0.8}}
                    style={ {display:'flex'} }
                    >

                        {itens.map( journey => {
                            return(
                                <motion.div 
                                className='item' 
                                key={journey.name}
                                style={{
                                    minWidth: '300px',
                                    padding: '14px',
                                    // backgroundColor: "red"
                                }}
                                >
                                    <img 
                                    src={journey.image} 
                                    style={{
                                        width:'100%',
                                        height:'100%',
                                        borderRadius: '14px',
                                        pointerEvents: 'none',
                                    }}
                                    />
                                </motion.div>
                            )
                        })}
                        
                    </motion.div>
                )
            })}
        </motion.div>
    )
}