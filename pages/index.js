import Menu from '../src/components/Menu'
import Content from '../src/components/Content'
import { CSSReset } from '../src/components/CSSReset'
import Banner  from '../src/components/Banner'

function Home () {
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}> 
                <Menu />
                <Banner />
            </div>
        </>
    )
}

export default Home

