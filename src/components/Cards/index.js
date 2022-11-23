import { StyledCards, StyledCard, OutterStyledDiv } from './styles'


export default function Cards({ currentJourney, setIsModalVisible, setCurrentExercise }) {

    const currentExercise = currentJourney
    return (
        <StyledCards> 
            { currentExercise ? 
            <ScrollElem exerciseVet={currentJourney} setIsModalVisible={setIsModalVisible} setCurrentExercise={setCurrentExercise} /> 
            : null }
        </StyledCards> 
    )
}

function ScrollElem ( { exerciseVet, setIsModalVisible, setCurrentExercise } ) {

    return(
        <OutterStyledDiv>
            <div className='inner'
            // style={{  border: '1px solid black', }}
            >
                {exerciseVet.map( exercise => {
                    return (
                        <a key={exercise.name} >
                            <StyledCard 
                            onClick={() => {
                                setIsModalVisible(true)
                                setCurrentExercise(exercise)                               
                            }}
                            >
                                <div style={{ textAlign: 'center', width: '100%' }}>
                                    <div style={{ backgroundColor:'white', padding:'3px 0 3px 0' }}>
                                        <h3 style={{color: 'black'}}>{exercise.name}</h3>
                                    </div>
                                </div>
                            </StyledCard>
                        </a>
                    )
                })}
            </div>
        </OutterStyledDiv>
    )
}