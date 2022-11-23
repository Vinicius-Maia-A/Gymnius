import DarkModeSwitch from './components/DarkModeSwitch'
import { StyledLogo, StyledMenu } from './styles'

export default function Menu () {
    return (
       
        <StyledMenu>
            <StyledLogo>
                <span>Gymnius</span>
            </StyledLogo>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                width: "130px",
                alignItems:"center"
            }}>
                
                <a href='../../../about'>
                    <h3>Sobre</h3>
                </a>
                
                {/* <DarkModeSwitch /> */}
            </div>
        </StyledMenu>
    )
}

