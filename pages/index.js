import { useState } from 'react'
import { CSSReset } from '../src/components/CSSReset'
import styled from 'styled-components'
import Menu from '../src/components/Menu'
import Main from '../src/components/Main'
import Cards  from '../src/components/Cards'
import ModalExercise, { MOdalExercise } from '../src/components/ModalExercise'
import '../node_modules/video-react/dist/video-react.css';
import { Player } from 'video-react';

import v0 from '../src/assets/peito/Supino Reto.mp4'
import v1 from '../src/assets/peito/Supino 45.mp4'
import v2 from '../src/assets/peito/Voador.mp4'
import v3 from '../src/assets/peito/Crucifixo.mp4'
import v4 from '../src/assets/peito/Supino Declinado.mp4'

import v5 from '../src/assets/triceps/Triceps Corda.mp4'
import v6 from '../src/assets/triceps/Triceps Coice.mp4'
import v7 from '../src/assets/triceps/Triceps Testa.mp4'

import v8 from '../src/assets/costas/Pulley frente.mp4'
import v9 from '../src/assets/costas/Remada cavalinho.mp4'
import v10 from '../src/assets/costas/Remada baixa.mp4'

import v11 from '../src/assets/ombro/Desenvolvimento de ombro com halteres.mp4'
import v12 from '../src/assets/ombro/Remada alta com barra.mp4'
import v13 from '../src/assets/ombro/Elevação lateral.mp4'

import v14 from '../src/assets/biceps/Rosca direta.mp4'
import v15 from '../src/assets/biceps/Rosca martelo.mp4'
import v16 from '../src/assets/biceps/Rosca concentrada.mp4'

import v17 from '../src/assets/abdomen/Abdominal infra.mp4'
import v18 from '../src/assets/abdomen/Prancha lateral.mp4'
import v19 from '../src/assets/abdomen/Prancha.mp4'



function HomePage () {

    const videoArray = [v0,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16,v17,v18,v19]

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
                                    width={'100%'}
                                    height={'100%'}
                                    autoPlay
                                    loop
                                    // muted
                                    playsInline
                                src={videoArray[currentExercise.video]}
                                    />                                
                            </div>
                            <div className='description'>
                                <div className='text'>
                                    <div className='title'>
                                        <h2>{currentExercise.description}</h2>
                                    </div>
                                    <hr />
                                    <div className='instructions'>
                                        <p><h3>{currentExercise.instruction1}</h3></p>
                                        <p><h3>{currentExercise.instruction2}</h3></p>
                                        <p><h3>{currentExercise.instruction3}</h3></p>    
                                    </div>      
                                </div>
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

