import { StyledCards, StyledCard, OutterStyledDiv } from './styles'


export default function Cards({ currentJourney }) {

    const currentExercise = currentJourney
    return (
        <StyledCards> 
            { currentExercise ? <ScrollElem exerciseVet={currentJourney} /> : null }
        </StyledCards> 
    )
}

function ScrollElem ( { exerciseVet } ) {

    return(
        <OutterStyledDiv>
            <div className='inner'
            // style={{  border: '1px solid black', }}
            >
                {exerciseVet.map( exercise => {
                    return (
                        <a href='../../../testePag'>
                        <StyledCard key={exercise.name} >
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