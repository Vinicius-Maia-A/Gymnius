import { useState } from 'react'
import { CSSReset } from '../src/components/CSSReset'
import styled from 'styled-components'
import Menu from '../src/components/Menu'
import Main from '../src/components/Main'
import Cards  from '../src/components/Cards'
import ModalExercise, { MOdalExercise } from '../src/components/ModalExercise'
import '../node_modules/video-react/dist/video-react.css';
import video0 from '../src/assets/sion.mp4'
import { Player } from 'video-react';

function HomePage () {

    const videoArray = [video0]

    const [currentJourney, setCurrentJourney] = useState()
    const[currentExercise,setCurrentExercise] = useState()
    const [isModalVisible, setIsModalVisible] = useState(false)
    
    return (
        <>
            <CSSReset />
            <StyledGrid> 
                <Menu />
                <Banner /> 
                <Main setCurrentJourney={setCurrentJourney} />
                <Cards currentJourney={currentJourney} setIsModalVisible={setIsModalVisible} setCurrentExercise={setCurrentExercise} />
            </StyledGrid>
            <div className='modal'>
                {isModalVisible ? 
                    <ModalExercise setIsModalVisible={setIsModalVisible}>
                        
                        {/* NOME DO EXERCICIO E HR */}
                        <div className='exercise-name'>
                            <h2>{currentExercise.name}</h2>
                            <hr className='linha' />
                        </div>
                        {/* CONTEUDO DO EXERCICIO */}
                        
                        <div className='content'>
                            <div className='video-container'>
                                <Player
                                    
                                    fluid={false}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                src={videoArray[currentExercise.video]}
                                    />                                
                            </div>
                            <div className='description'>
                                <h2>{currentExercise.description}</h2>
                                <hr />
                                <p><h3>{currentExercise.instructions}</h3></p>
                                <p><h3>{currentExercise.instructions}</h3></p>
                                <p><h3>{currentExercise.instructions}</h3></p>
                                
                                
                            </div>
                        </div>
                        
                        
                    </ModalExercise> 
                : null}
            </div>
        </>
    )
}

function Banner() {
    return(
        <StyledBanner className="banner" > 
            <h2>Escolha sua jornada <br />fitness <br />
                {/* <motion.hr 
                initial={{ x: -200 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}/> */}
            </h2>
        </StyledBanner>
    )
}

const StyledBanner = styled.div`
    display: block;
    width: 100%;
    margin-left: 35px;
    align-items: center;
    font-size: 45px;
    color: white;
   /* background-color: red; */
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-rows: 75px 0.1fr 0.8fr;   
    grid-template-columns: 2fr 1fr;
    color: black;
    height: 100hv;
    width: 100vw;

    .banner {
        grid-row: 2;
        grid-column: 1;
    }
`
export default HomePage

